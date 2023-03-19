import {
    styled,
    BottomNavigation,
    BottomNavigationAction,
    Collapse,
    Paper,
    Box,
} from "@mui/material";
import type { BottomNavigationActionProps } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

import { useHasScrolled } from "../../hooks";

import HomeIcon from "~icons/mdi/paw";
import RAndDIcon from "~icons/material-symbols/science-outline";

const NAV_HEIGHT = 70;

const CustomCollapse = styled(Collapse)({
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1600,
});

const CustomBottomNavigation = styled(BottomNavigation)({
    height: NAV_HEIGHT,
});

export const NavigationSpacer = styled(Box)({
    height: NAV_HEIGHT,
    bgcolor: "primary.dark",
});

export const BottomNavigationLink = (
    props: Pick<BottomNavigationActionProps, "label" | "icon" | "value">
) => {
    return (
        <BottomNavigationAction {...props} component={Link} to={props.value} />
    );
};

export const Navigation = () => {
    const location = useLocation();
    const hasScrolled = useHasScrolled();
    return (
        <CustomCollapse in={hasScrolled}>
            <Paper elevation={3} role={"navigation"}>
                <CustomBottomNavigation showLabels value={location.pathname}>
                    <BottomNavigationLink
                        label={"Home"}
                        icon={<HomeIcon />}
                        value={"/"}
                    />
                    <BottomNavigationLink
                        value={"/research-and-development"}
                        icon={<RAndDIcon />}
                        label={"R&D"}
                    />
                </CustomBottomNavigation>
            </Paper>
        </CustomCollapse>
    );
};
