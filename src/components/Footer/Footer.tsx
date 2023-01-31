import { Box, Container, Grid } from "@mui/material";

import { Contacts } from "./Contacts";
import { EventDetails } from "./EventDetails";
import { Support } from "./Support";

export const Footer = () => (
    <Box sx={{ bgcolor: "primary.dark" }}>
        <Container sx={{ bgcolor: "primary.dark", p: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <EventDetails />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Contacts />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Support />
                </Grid>
            </Grid>
        </Container>
    </Box>
);
