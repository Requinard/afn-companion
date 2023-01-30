import {
    Link,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";

import CopyrightIcon from "~icons/material-symbols/copyright-outline";
import LocationIcon from "~icons/material-symbols/location-on-outline";
import CalendarIcon from "~icons/material-symbols/calendar-month";

export const EventDetails = () => (
    <List dense>
        <ListItem>
            <ListItemText
                primary={"The Alfurnative 2023"}
                primaryTypographyProps={{ variant: "h4" }}
            />
        </ListItem>
        <ListItemButton
            component={Link}
            href={
                "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20230922T130000Z%2F20230925T190000Z&location=Hotel%20Het%20Arsenaal%20%20Korte%20Geer%201%2C%2025611%2C%20Delft&text=The%20Alfurnative%202"
            }
        >
            <ListItemIcon>
                <CalendarIcon />
            </ListItemIcon>
            <ListItemText
                primary={"From September 22nd"}
                secondary={"Until September 25th"}
            />
        </ListItemButton>
        <ListItemButton component={Link} href={"https://hotelarsenaal.com/"}>
            <ListItemIcon>
                <LocationIcon />
            </ListItemIcon>
            <ListItemText
                primary={"Hotel Het Arsenaal"}
                secondary={"Korte Geer 1, 25611, Delft"}
            />
        </ListItemButton>
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
