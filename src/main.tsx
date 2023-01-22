import React from "react";
import ReactDOM from "react-dom/client";
import {
    createTheme,
    CssBaseline,
    StyledEngineProvider,
    ThemeProvider,
} from "@mui/material";
import { purple } from "@mui/material/colors";

import { App } from "./App";

const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: purple[600],
        },
    },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <StyledEngineProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <App />
            </ThemeProvider>
        </StyledEngineProvider>
    </React.StrictMode>
);
