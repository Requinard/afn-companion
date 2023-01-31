import "@fontsource/roboto/latin.css";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet";
import "./main.css";
import React from "react";
import ReactDOM from "react-dom/client";
import {
    createTheme,
    CssBaseline,
    darken,
    lighten,
    StyledEngineProvider,
    ThemeProvider,
} from "@mui/material";
import { BrowserRouter } from "react-router-dom";

import { App } from "./App";

const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            light: lighten("#e912e3", 0.5),
            main: "#e912e3",
            dark: darken("#e912e3", 0.5),
            contrastText: "#f1f1f1",
        },
    },
    components: {
        MuiCardHeader: {
            defaultProps: {
                titleTypographyProps: {
                    color: "primary.main",
                    variant: "h5",
                },
            },
        },
    },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <StyledEngineProvider>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <App />
                </ThemeProvider>
            </StyledEngineProvider>
        </BrowserRouter>
    </React.StrictMode>
);
