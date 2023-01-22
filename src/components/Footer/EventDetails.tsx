import { Box, Typography } from "@mui/material";

export const EventDetails = () => (
    <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-evenly"}
        flex={1}
        height={"100%"}
    >
        <Typography variant={"h4"}>The Alfurnative</Typography>
        <Typography>September 30th to October 1st, 2022</Typography>
        <Typography>
            Hotel Het Arsenaal
            <br /> Korte Geer 1<br /> 2611 CA, Delft
        </Typography>
        <Typography>
            Copyright © The Alfurnative - {new Date().getFullYear()}
        </Typography>
    </Box>
);
