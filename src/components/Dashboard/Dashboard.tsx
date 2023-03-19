import { Box, styled } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

import { Footer } from "../Footer";

import { Navigation } from "./Navigation";

const DashboardInner = styled(Box)({
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
});

const MainSection = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    flex: 1,
    maxHeight: "100%",
    overflowY: "auto",
    mb: theme.spacing(5),
}));

export const Dashboard = () => {
    const location = useLocation();

    useEffect(() => {
        document.querySelector("main")?.scrollTo({ top: 0 });
    }, [location]);

    return (
        <DashboardInner>
            <MainSection component={"main"} role={"main"}>
                <Outlet />
                <Footer />
            </MainSection>
            <Navigation />
        </DashboardInner>
    );
};
