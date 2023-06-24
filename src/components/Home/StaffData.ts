import Requinard from "./assets/staff-requinard.png?height=500&format=avif&imagetools";
import Luvu from "./assets/staff-luvu.png?height=500&format=avif&imagetools";
import Switch from "./assets/staff-switch.png?height=500&format=avif&imagetools";
import RikAndMastix from "./assets/staff-rik-mastix.png?height=500&format=avif&imagetools";
import SambersMylunee from "./assets/staff-sambers-mylunee.png?height=500&format=avif&imagetools";
import Lighty from "./assets/staff-lighty.png?height=500&format=avif&imagetools";
import Avi from "./assets/staff-avi.png?height=500&format=avif&imagetools";
import Walaku from "./assets/staff-walaku.png?height=500&format=avif&imagetools";

type StaffMember = {
    image: string;
    body: string;
};

export const StaffData: StaffMember[] = [
    {
        image: Walaku,
        body: "Hello all, I'm Walaku your events lead! We are here to ensure all the activities are well-organized and exciting. Feel free to contact me.",
    },
    {
        image: Avi,
        body: "Hi! My name is Avi, and I am the art team lead! I make sure your convention experience is filled with fun and memorable art pieces surrounding you, all done by my amazing team!",
    },
    {
        image: Lighty,
        body: "Hey there! I'm Lighty, and I am the Head of Security! It's my team's job to make sure everyone is and feels safe and comfortable at our event, please let me know if there's anything we can do for you c:",
    },
    {
        image: SambersMylunee,
        body: "Hi everyone! We are Mylunee and Sambers, and we organise the dealers den! It's our job to select dealers and provide them with all the tools and information they need, so that they in turn can offer their fantastic wares to you, our attendees! You will find us in the dealers den at the con and are always available for any questions :)",
    },
    {
        image: RikAndMastix,
        body: "Hey! We're Rik and Mastix, and we're the tech team. We take care of the lights, sounds and almost everything to do with our dance nights. We make sure the sights and sounds will be memorable in your convention experience!",
    },
    {
        image: Switch,
        body: "What's up, name's Switch! I handle the social media and announcement posts as PR lead. Making the posts like the one you are seeing right now. Stoked for AFn again, let's party 👀👌🏻",
    },
    {
        image: Luvu,
        body: "Hey there! I'm Luvu, and I'm the all-round runner! It's my job to help the other teams with whatever they need, from setting things up to getting supplies. I make sure the other teams don't stall with whatever they're doing!",
    },
    {
        image: Requinard,
        body:
            "What's up, I'm Requinard. I'm working together with Coda to\n" +
            "                    develop the Alfurnative website and app, so you can stay up\n" +
            "                    to date with the latest schedule changes, and hopefully even\n" +
            "                    more. If you have a wacky idea, hit me up and we can see if\n" +
            "                    it'll work!",
    },
];
