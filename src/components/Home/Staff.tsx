import { Grid } from "@mui/material";
import { Image } from "mui-image";

import Hunter from "./assets/staff-hunter.png?height=500&format=webp&imagetools";
import Lighty from "./assets/staff-lighty.png?height=500&format=webp&imagetools";
import Avi from "./assets/staff-avi.png?height=500&format=webp&imagetools";
import Dibs from "./assets/staff-dibs.png?height=500&format=webp&imagetools";
import Mylune from "./assets/staff-mylunee.png?height=500&format=webp&imagetools";
import Switch from "./assets/staff-switch.png?height=500&format=webp&imagetools";

type StaffMemberProps = {
    image: string;
};
const StaffMember = ({ image }: StaffMemberProps) => {
    return (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Image
                src={image}
                duration={1000}
                shiftDuration={100}
                fit={"cover"}
            />
        </Grid>
    );
};

export const Staff = () => (
    <Grid container>
        <StaffMember image={Mylune} />
        <StaffMember image={Switch} />
        <StaffMember image={Avi} />
        <StaffMember image={Dibs} />
        <StaffMember image={Lighty} />
        <StaffMember image={Hunter} />
    </Grid>
);
