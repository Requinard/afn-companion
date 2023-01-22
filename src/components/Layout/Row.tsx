import { Box, Container, Grid } from "@mui/material";
import { PropsWithChildren } from "react";
import type { SxProps } from "@mui/material";

type RowProps = {
    sx?: SxProps;
};
export const Row = ({ children, sx }: PropsWithChildren<RowProps>) => (
    <Box sx={sx}>
        <Container maxWidth={"xl"}>
            <Grid container spacing={2} alignItems={"center"}>
                {children}
            </Grid>
        </Container>
    </Box>
);
