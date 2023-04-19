import {
    Link,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";

import TelegramIcon from "~icons/ic/sharp-telegram";
import TwitterIcon from "~icons/mdi/twitter";

export const Contacts = () => (
    <List dense>
        <ListItem>
            <ListItemText
                primary={"Get in touch"}
                primaryTypographyProps={{ variant: "h4" }}
            />
        </ListItem>
        <ListItemButton
            component={Link}
            href={"https://t.me/Alfurnative"}
            rel={"noopener"}
            target={"_blank"}
        >
            <ListItemIcon>
                <TelegramIcon />
            </ListItemIcon>
            <ListItemText
                primary={"Official Alfurnative Announcement Channel"}
                secondary={"The latest updates will be posted to this channel"}
            />
        </ListItemButton>
        <ListItemButton
            component={Link}
            href={"https://t.me/AlfurnativeSocial"}
            rel={"noopener"}
            target={"_blank"}
        >
            <ListItemIcon>
                <TelegramIcon />
            </ListItemIcon>
            <ListItemText
                primary={"Official Alfurnative Social Chat"}
                secondary={"Chat and ask questions here! "}
            />
        </ListItemButton>
        <ListItemButton
            component={Link}
            href={"https://twitter.com/alfurnative"}
            rel={"noopener"}
            target={"_blank"}
        >
            <ListItemIcon>
                <TwitterIcon />
            </ListItemIcon>
            <ListItemText
                primary={"@alfurnative"}
                secondary={
                    "Our twitter account with the latest news and announcements."
                }
            />
        </ListItemButton>
    </List>
);
