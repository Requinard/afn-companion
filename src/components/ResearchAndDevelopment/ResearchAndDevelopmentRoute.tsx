import { Box, Container } from "@mui/material";

import { RDTEaser } from "./RDTeaser";

export const ResearchAndDevelopmentRoute = () => {
    return (
        <Container>
            <Box
                display={"flex"}
                flex={1}
                alignItems={"center"}
                justifyContent={"center"}
                minHeight={"100vh"}
                flexDirection={"column"}
            >
                <RDTEaser />
            </Box>
        </Container>
    );
};
