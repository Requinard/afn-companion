import { Grid, useTheme } from "@mui/material";
import { Image } from "mui-image";

import { Row } from "../Layout/Row";

import LogoImage from "./assets/logo.png?format=webp&imagetools";
import { AboutUsCard } from "./AboutUsCard";
import { LocationCard } from "./LocationCard";
import { FAQ } from "./FAQ";

export const HomePage = () => {
    const theme = useTheme();
    return (
        <>
            <Row
                sx={{
                    pt: 10,
                    [theme.breakpoints.up("md")]: {
                        pb: 10,
                    },
                }}
            >
                <Grid
                    item
                    xs={12}
                    justifyContent={"center"}
                    alignItems={"center"}
                    sx={{
                        display: "flex",
                        pt: 10,
                        [theme.breakpoints.up("md")]: {
                            pb: 10,
                        },
                    }}
                >
                    <Image
                        src={LogoImage}
                        alt={"The alfurnative dates"}
                        duration={1000}
                        shiftDuration={100}
                        fit={"contain"}
                        height={"30vh"}
                    />
                </Grid>
            </Row>
            <Row sx={{ pt: 4, pb: 4 }}>
                <Grid item xs={12} md={8}>
                    <AboutUsCard />
                </Grid>
                <Grid item xs={12} md={4}>
                    <FAQ />
                </Grid>
            </Row>
            <LocationCard />
        </>
    );
};
