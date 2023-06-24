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
    responsiveFontSizes,
    StyledEngineProvider,
    ThemeProvider,
} from "@mui/material";
import * as Sentry from "@sentry/react";

import { AppRoutes } from "./AppRoutes";

Sentry.init({
    dsn: "https://glet_0caac89adeda39c8003532392f262648@observe.gitlab.com:443/errortracking/api/v1/projects/46968305",
});

const theme = responsiveFontSizes(
    createTheme({
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
            MuiContainer: {
                defaultProps: {
                    maxWidth: "xl",
                },
            },
        },
    })
);

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
