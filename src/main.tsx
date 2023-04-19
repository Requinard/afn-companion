import "@fontsource/roboto/latin.css";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet";
import "./main.css";
import "./utilities/dayjs";
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

import { AppRoutes } from "./AppRoutes";

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
        <StyledEngineProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppRoutes />
            </ThemeProvider>
        </StyledEngineProvider>
    </React.StrictMode>
);
