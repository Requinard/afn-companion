import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

export const NavBar = () => {
    const location = useLocation();

    if (location) {
        return null;
    }
    return (
        <Box flexGrow={1}>
            <AppBar position={"static"}>
                <Toolbar>
                    <Typography
                        variant={"h6"}
                        component={"div"}
                        sx={{ flexGrow: 1 }}
                    >
                        Alfurnative
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
