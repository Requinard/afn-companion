import { LinearProgress, Typography } from "@mui/material";

export const RDTEaser = () => {
    return (
        <>
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
            <Typography variant={"h6"}>
                Stay tuned for more info . . .
            </Typography>
            <LinearProgress color={"primary"} />
        </>
    );
};
