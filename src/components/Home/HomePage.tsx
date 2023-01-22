import { Container, Grid } from "@mui/material";
import { Image } from "mui-image";

import LogoImage from "./assets/logo.png?format=webp&imagetools";
import { AboutUsCard } from "./AboutUsCard";
import { LocationCard } from "./LocationCard";
import { FAQ } from "./FAQ";

export const HomePage = () => (
    <>
        <Container sx={{ p: 4, minHeight: "75vh" }} maxWidth={"xl"}>
            <Grid container spacing={2}>
                <Grid
                    item
                    xs={12}
                    justifyContent={"center"}
                    alignItems={"center"}
                    sx={{
                        display: "flex",
                        pt: 10,
                        pb: 10,
                    }}
                >
                    <Image
                        src={LogoImage}
                        alt={"The alfurnative dates"}
                        duration={1000}
                        shiftDuration={100}
                        height={400}
                        width={"auto"}
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <AboutUsCard />
                </Grid>
                <Grid item xs={12} md={4}>
                    <FAQ />
                </Grid>
            </Grid>
        </Container>
        <LocationCard />
    </>
);
