import { Card, CardContent, CardHeader, Typography } from "@mui/material";

import PawIcon from "~icons/mdi/paw";

export const AboutUsCard = () => (
    <Card>
        <CardHeader
            sx={{ color: "primary.main" }}
            color={"primary"}
            avatar={<PawIcon />}
            title={"About Us"}
        />
        <CardContent>
            <Typography>
                Welcome to Alfurnative! We are a brand new Dutch furry
                convention held in Delft, The Netherlands. Our convention has a
                few objectives in the coming years:
                <ul>
                    <li>
                        Establish a staple hotel convention in The Netherlands
                    </li>
                    <li>
                        Emit a different sound on the dancefloor from regular
                        conventions
                    </li>
                    <li>
                        Work together with local governments, councils and
                        commercial businesses
                    </li>
                    <li>
                        In-corporate a focus on parties and good-times from
                        American conventions
                    </li>
                    <li>
                        In-corporate a European style of organisation and
                        management
                    </li>
                </ul>
                These goals will help us remain focussed on growth and quality
                as the years come and go.
            </Typography>
        </CardContent>
    </Card>
);
