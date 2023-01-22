import { Box } from "@mui/material";

import { NavBar } from "./components/NavBar";
import { AppRoutes } from "./AppRoutes";

export function App() {
    return (
        <Box
            minHeight={"100vh"}
            maxWidth={"100vw"}
            width={"100vw"}
            display={"flex"}
            flexDirection={"column"}
        >
            <Box>
                <NavBar />
            </Box>
            <Box flex={1} display={"flex"} flexDirection={"column"}>
                <AppRoutes />
            </Box>
        </Box>
    );
}
