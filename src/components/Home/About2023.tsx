import {
    Alert,
    AlertTitle,
    Badge,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Link,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    Stack,
    Typography,
} from "@mui/material";
import dayjs from "dayjs";

import PartyIcon from "~icons/lucide/party-popper";
import RoomIcon from "~icons/material-symbols/room-service";
import PremiumRoomIcon from "~icons/material-symbols/workspace-premium";
import DayIcon from "~icons/mdi/calendar-today";

const regDay = dayjs("2023-04-29T12:00:00.000+02:00");

export const About2023 = () => {
    return (
        <Card>
            <CardHeader
                title={"Alfurnative 2023"}
                subheader={"From September 22nd to September 25th"}
                avatar={<PartyIcon />}
                sx={{ color: "primary.main" }}
            />
            <Alert severity={"info"} title={regDay.toISOString()}>
                <AlertTitle>
                    Registration date: {regDay.format("LLL")}
                </AlertTitle>
                That is {regDay.fromNow()}.
            </Alert>
            <CardContent>
                <Stack spacing={2}>
                    <Typography>
                        We are once again guests to 'Het Arsenaal' and they are
                        happy to have us back. Outsite will be joining us again,
                        and your highest submitted critique has been met: We are
                        extending it by a day.
                    </Typography>
                    <Typography>
                        From the 22nd until the 25th of September, Alfurnative
                        is returning to Delft! We can offer the full range of
                        their rooms this year around, as well, with a choice
                        between rooms that look into the courtyard ('Comfort'
                        Rooms) or out over the canals ('Superiour' Rooms; these
                        are a tiny bit more expensive but also a little bigger).
                    </Typography>
                    <Typography>
                        Ticket sale will begin halfway February, and in the
                        meantime we will be looking for your opinion on, and
                        interest in hosting experiences at AFN.
                    </Typography>
                    <Typography>
                        We will have a range of sponsor merch available, most of
                        which are still in production, so we can't say much yet
                        - but we're convinced you'll like them!
                    </Typography>
                </Stack>
            </CardContent>
            <CardActions>
                <Button
                    component={Link}
                    fullWidth
                    href={
                        "https://docs.google.com/forms/d/e/1FAIpQLSc4RBA_rcFiTmst4BqyoE3G_B7s9WkJRtH3DBU5ShGoVmfM0A/viewform"
                    }
                >
                    Help us out by completing a survey!
                </Button>
            </CardActions>
            <List>
                <ListSubheader>How to attend</ListSubheader>
                <ListItem>
                    <ListItemIcon>
                        <Badge badgeContent={78} color={"primary"}>
                            <RoomIcon />
                        </Badge>
                    </ListItemIcon>
                    <ListItemText
                        primary={"Comfort Room"}
                        secondary={
                            "€435 per person, including breakfast and dinner"
                        }
                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <Badge badgeContent={42} color={"primary"}>
                            <PremiumRoomIcon />
                        </Badge>
                    </ListItemIcon>
                    <ListItemText
                        primary={"Superiour Room"}
                        secondary={
                            "€445 per person, including breakfast and dinner"
                        }
                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <DayIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary={"Day Ticket"}
                        secondary={"€100 for the weekend, €60 for a single day"}
                    />
                </ListItem>
            </List>
        </Card>
    );
};
