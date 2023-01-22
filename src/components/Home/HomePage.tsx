import { Box } from "@mui/material";

import LogoImage from "./assets/logo.png?format=webp&imagetools";

export const HomePage = () => (
    <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flex={1}
    >
        <img src={LogoImage} height={400} alt={"The alfunrative dates"} />
    </Box>
);
