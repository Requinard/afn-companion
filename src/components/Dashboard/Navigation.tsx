import type { BottomNavigationActionProps } from "@mui/material";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

import HomeIcon from "~icons/mdi/paw";
import RAndDIcon from "~icons/material-symbols/science-outline";

export const BottomNavigationLink = (
    props: Pick<BottomNavigationActionProps, "label" | "icon" | "value">
) => {
    return (
        <BottomNavigationAction {...props} component={Link} to={props.value} />
    );
};

export const Navigation = () => {
    const location = useLocation();
    return (
        <Paper elevation={3} role={"navigation"}>
            <BottomNavigation
                sx={{
                    height: 70,
                }}
                showLabels
                value={location.pathname}
            >
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
            </BottomNavigation>
        </Paper>
    );
};
