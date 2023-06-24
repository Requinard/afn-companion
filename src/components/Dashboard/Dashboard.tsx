import { Box, styled } from "@mui/material";
import { Outlet } from "react-router-dom";

import { Footer } from "../Footer";
import { useAutoScroll } from "../../hooks";
import { CustomErrorBoundary } from "../ErrorHandling/CustomErrorBoundary";

import { Navigation, NavigationSpacer } from "./Navigation";

const DashboardInner = styled(Box)({
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
});

const MainSection = styled(Box)({
    display: "flex",
    flexDirection: "column",
    flex: 1,
});

export const Dashboard = () => {
    useAutoScroll();
    return (
        <DashboardInner>
            <MainSection component={"main"} role={"main"}>
                <CustomErrorBoundary>
                    <Outlet />
                </CustomErrorBoundary>
                <Footer />
                <NavigationSpacer />
            </MainSection>
            <Navigation />
        </DashboardInner>
    );
};
