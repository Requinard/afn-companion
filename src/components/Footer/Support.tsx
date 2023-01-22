import {
    Link,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListSubheader,
} from "@mui/material";

import PawIcon from "~icons/mdi/paw";

export const Support = () => (
    <List dense>
        <ListSubheader disableSticky>Support</ListSubheader>
        <ListItemButton
            component={Link}
            href={"https://universe.com/"}
            rel={"noopener"}
            target={"_blank"}
        >
            <ListItemIcon>
                <PawIcon />
            </ListItemIcon>
            <ListItemText
                primary={"Universe.com"}
                secondary={"Our ticket provider."}
            />
        </ListItemButton>
        <ListItemButton
            component={Link}
            href={"https://stripe.com/"}
            rel={"noopener"}
            target={"_blank"}
        >
            <ListItemIcon>
                <PawIcon />
            </ListItemIcon>
            <ListItemText
                primary={"Stripe.com"}
                secondary={
                    "Our payment processor. Trouble with your payments can be taken up with them."
                }
            />
        </ListItemButton>
        <ListItemButton
            component={Link}
            href={
                "https://www.evernote.com/shard/s719/sh/fb16c279-f1ea-56f9-69a5-c4c683f466bb/605ef46c7eab6e82650b13e269bc4925"
            }
            rel={"noopener"}
            target={"_blank"}
        >
            <ListItemIcon>
                <PawIcon />
            </ListItemIcon>
            <ListItemText
                primary={"T.O.S."}
                secondary={
                    "Our Terms of Service, please read these carefully before attending our event."
                }
            />
        </ListItemButton>
    </List>
);
