import * as Sentry from "@sentry/react";
import {
    Avatar,
    Box,
    Card,
    CardContent,
    CardHeader,
    Chip,
    IconButton,
    Stack,
    Typography,
} from "@mui/material";

import { Row } from "../Layout";

import BugIcon from "~icons/mdi/bug";
import RefreshIcon from "~icons/mdi/refresh";

export const ErrorFallback: Sentry.FallbackRender = ({
    error,
    eventId,
    resetError,
    componentStack,
}) => {
    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            minHeight={700}
        >
            <Card sx={{ minWidth: 600, maxWidth: "95vw" }}>
                <CardHeader
                    avatar={
                        <Avatar
                            sx={(theme) => ({
                                bgcolor: theme.palette.error.main,
                                color: theme.palette.error.contrastText,
                            })}
                        >
                            <BugIcon />
                        </Avatar>
                    }
                    title={"An error has occured"}
                    subheader={
                        "We're sorry you had to see this. The error has been reported and will be handled"
                    }
                    action={
                        <IconButton onClick={resetError}>
                            <RefreshIcon />
                        </IconButton>
                    }
                />
                <Box pl={2}>
                    <Chip label={`Event ID: ${eventId}`} />
                </Box>

                <CardContent sx={{ maxHeight: 500, overflowY: "auto" }}>
                    <Typography variant={"subtitle1"}>
                        {error.name.toString()}
                    </Typography>
                    <Typography>{error.message}</Typography>
                    <pre>
                        <code>{componentStack}</code>
                    </pre>
                </CardContent>
            </Card>
        </Box>
    );
};
