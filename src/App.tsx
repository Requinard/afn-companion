import { Box } from "@mui/material";

import { NavBar } from "./components/NavBar";
import { AppRoutes } from "./AppRoutes";
import { Footer } from "./components/Footer/Footer";

export function App() {
    return (
        <Box
            minHeight={"100vh"}
            maxWidth={"100vw"}
            width={"100vw"}
            display={"flex"}
            flexDirection={"column"}
            overflow={"none"}
        >
            <Box>
                <NavBar />
            </Box>
            <Box
                flex={1}
                display={"flex"}
                flexDirection={"column"}
                overflow={"auto"}
            >
                <AppRoutes />
            </Box>
            <Footer />
        </Box>
    );
}
