import { Image } from "mui-image";
import { animated, useSpring } from "@react-spring/web";

import LogoImage from "./assets/logo-2023.png";

export const Logo = () => {
    const props = useSpring({
        from: {
            scale: 1,
        },
        to: [{ scale: 1.05 }, { scale: 1.03 }, { scale: 1.05 }, { scale: 1 }],
        loop: true,
        delay: 7500,
        config: {
            duration: 200,
        },
    });
    return (
        <animated.div
            style={{
                scale: props.scale,
            }}
        >
            <Image
                src={LogoImage}
                alt={"The Alfurnative dates"}
                duration={1000}
                shiftDuration={100}
                fit={"contain"}
                height={475}
            />
        </animated.div>
    );
};
