import { Box, Container } from "@mui/material";

import { RDTEaser } from "./RDTeaser";

export const ResearchAndDevelopmentRoute = () => {
    return (
        <Container
            sx={{ justifyContent: "center", display: "flex" }}
            maxWidth={"md"}
        >
            <Box
                display={"flex"}
                flex={1}
                alignItems={"center"}
                justifyContent={"center"}
                minHeight={"100vh"}
                maxWidth={"95vw"}
                overflow={"none"}
                flexDirection={"column"}
            >
                <RDTEaser />
            </Box>
        </Container>
    );
};
