import type { BottomNavigationActionProps } from "@mui/material";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { useLocation } from "react-router-dom";

import HomeIcon from "~icons/mdi/paw";

export const BottomNavigationLink = ({
    to,
    ...props
}: Omit<BottomNavigationActionProps, "value"> & { to: string }) => {
    return (
        <BottomNavigationAction
            {...props}
            // component={Link}
            // // to={to}
            value={to}
        />
    );
};

export const Navigation = () => {
    const location = useLocation();
    return (
        <Paper elevation={3} role={"navigation"}>
            <BottomNavigation showLabels value={location.pathname}>
                <BottomNavigationLink
                    label={"Home"}
                    icon={<HomeIcon />}
                    to={"/"}
                />
            </BottomNavigation>
        </Paper>
    );
};
