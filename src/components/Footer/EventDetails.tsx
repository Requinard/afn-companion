import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

import CopyrightIcon from "~icons/material-symbols/copyright-outline";
import LocationIcon from "~icons/material-symbols/location-on-outline";
import CalendarIcon from "~icons/material-symbols/calendar-month";

export const EventDetails = () => (
    <List dense>
        <ListItem>
            <ListItemText
                primary={"The Alfurnative"}
                primaryTypographyProps={{ variant: "h4" }}
            />
        </ListItem>
        <ListItem>
            <ListItemIcon>
                <CalendarIcon />
            </ListItemIcon>
            <ListItemText
                primary={"From September 30th"}
                secondary={"Until October 1st"}
            />
        </ListItem>
        <ListItem>
            <ListItemIcon>
                <LocationIcon />
            </ListItemIcon>
            <ListItemText
                primary={"Hotel Het Arsenaal"}
                secondary={"Korte Geer 1, 25611, Delft"}
            />
        </ListItem>
        <ListItem>
            <ListItemIcon>
                <CopyrightIcon />
            </ListItemIcon>
            <ListItemText
                primary={"The Alfurnative"}
                secondary={new Date().getFullYear()}
            />
        </ListItem>
    </List>
);
