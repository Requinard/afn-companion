import { Box } from "@mui/material";

export const HomePage = () => (
    <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flex={1}
    >
        <img
            src={
                "https://alfurnative.nl/Resources/logoAlfurnativeColorText.png"
            }
            height={400}
            alt={"The alfunrative dates"}
        />
    </Box>
);
