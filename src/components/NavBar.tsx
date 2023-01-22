import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export const NavBar = () => (
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
