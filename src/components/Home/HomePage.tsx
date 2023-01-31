import { Grid, useTheme } from "@mui/material";

import { Row } from "../Layout/Row";

import { AboutUsCard } from "./AboutUsCard";
import { LocationCard } from "./LocationCard";
import { FAQ } from "./FAQ";
import { Logo } from "./Logo";
import { Staff } from "./Staff";
import { About2023 } from "./About2023";

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
                    <Logo />
                </Grid>
            </Row>
            <Row sx={{ pb: 2 }}>
                <Grid item xs={12} md={8}>
                    <About2023 />
                </Grid>
            </Row>
            <LocationCard />
            <Row sx={{ pt: 4, pb: 4 }}>
                <Grid item xs={12} md={6}>
                    <AboutUsCard />
                </Grid>
                <Grid item xs={12} md={4}>
                    <FAQ />
                </Grid>
            </Row>
            <Staff />
        </>
    );
};
