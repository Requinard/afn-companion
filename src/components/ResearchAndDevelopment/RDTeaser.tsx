import { Stack, Typography } from "@mui/material";

export const RDTEaser = () => {
    return (
        <Stack spacing={2}>
            <Typography variant={"h5"} gutterBottom>
                The Alfurnative presents
            </Typography>
            <Typography
                variant={"h1"}
                gutterBottom
                fontStyle={"italic"}
                color={"primary"}
            >
                Research and Development
            </Typography>
            <Typography>
                The AFN R&D Department is a brand new initiative for all events
                linked to, named after or hosted by Alfurnative, as well as the
                convention itself.
            </Typography>
            <Typography>
                Plainly put: The R&D Department will cycle profits back into the
                community. Often, creators in our community find themselves tied
                down by finances when they want to purchase a machine or attempt
                a newer, more experimental technique.
            </Typography>
            <Typography>
                After every major event, R&D will open for creators to apply for
                grants. In exchange they must bear the AFN name, but we will be
                choosing carefully where and how to implement this new
                initiative. Our first rollouts will happen after Alfurnative:
                Edge of Tomorrow, so keep your eyes peeled for information!
            </Typography>
        </Stack>
    );
};
