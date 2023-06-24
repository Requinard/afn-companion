import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Container,
    Divider,
    Typography,
} from "@mui/material";
import { Image } from "mui-image";
import Carousel from "react-material-ui-carousel";
import { chunk } from "lodash-es";
import { useMemo, useRef } from "react";
import { useSize } from "ahooks";

import { StaffData } from "./StaffData";

type StaffMemberProps = {
    image: string;
    body?: string;
};
const StaffMember = ({ image, body }: StaffMemberProps) => {
    return (
        <Card sx={{ width: 400, overflow: "none", maxWidth: "95vw" }}>
            <CardMedia>
                <Image
                    src={image}
                    fit={"contain"}
                    height={500}
                    shiftDuration={100}
                    duration={100}
                />
            </CardMedia>
            <Divider />
            <CardContent>{body}</CardContent>
        </Card>
    );
};

export const Staff = () => {
    const containerRef = useRef(null);
    const size = useSize(containerRef);
    const elements = useMemo(() => {
        const width = size?.width ?? 451;
        const itemsOnScreen = Math.max(Math.floor(width / 450), 1);

        return chunk(StaffData, itemsOnScreen).map((staffMembers) => (
            <Box
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"space-around"}
            >
                {staffMembers.map((staffMember) => (
                    <StaffMember
                        image={staffMember.image}
                        body={staffMember.body}
                        key={staffMember.image}
                    />
                ))}
            </Box>
        ));
    }, [size]);
    return (
        <Container ref={containerRef} sx={{ py: 4 }}>
            <Typography variant={"h3"} gutterBottom sx={{ pr: 4 }}>
                Meet the staff
            </Typography>
            <Carousel animation={"slide"} interval={10000} height={700}>
                {elements}
            </Carousel>
        </Container>
    );
};
