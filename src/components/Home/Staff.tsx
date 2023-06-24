import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Stack,
    Typography,
} from "@mui/material";
import { Image } from "mui-image";

import { StaffData } from "./StaffData";

type StaffMemberProps = {
    image: string;
    body?: string;
};
const StaffMember = ({ image, body }: StaffMemberProps) => {
    return (
        <Card sx={{ minWidth: 400 }}>
            <Image src={image} fit={"contain"} height={500} />
            <CardContent>{body}</CardContent>
        </Card>
    );
};

export const Staff = () => (
    <Box overflow={"auto"} maxWidth={"100vw"} py={2} px={8}>
        <Typography variant={"h3"} gutterBottom>
            Meet the staff
        </Typography>
        <Box flexDirection="row" gap={2} display={"flex"} flexWrap={"nowrap"}>
            {StaffData.map((it) => (
                <StaffMember image={it.image} body={it.body} key={it.image} />
            ))}
        </Box>
    </Box>
);
