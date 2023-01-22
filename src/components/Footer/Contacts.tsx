import {
    Link,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListSubheader,
} from "@mui/material";

import TelegramIcon from "~icons/ic/sharp-telegram";
import TwitterIcon from "~icons/mdi/twitter";

export const Contacts = () => (
    <List dense>
        <ListSubheader disableSticky>Get in touch</ListSubheader>
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
            href={"https://twitter.com/TheAlfurnative"}
            rel={"noopener"}
            target={"_blank"}
        >
            <ListItemIcon>
                <TwitterIcon />
            </ListItemIcon>
            <ListItemText
                primary={"@TheAlfurnative"}
                secondary={
                    "Our Twitter, however, it is currently suspended due to a crypto-bot attack. We are working to resolve this."
                }
            />
        </ListItemButton>
    </List>
);
