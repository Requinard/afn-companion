import { useLayoutEffect, useState } from "react";
import { debounce } from "@mui/material";

const getMainScroll = (): number => {
    const main = document.getElementsByTagName("main").item(0);

    if (main === null) {
        return NaN;
    }

    return main.scrollTop;
};

export const useHasScrolled = () => {
    const [hasScrolled, setHasScrolled] = useState<boolean>(
        () => getMainScroll() >= 100
    );

    useLayoutEffect(() => {
        const onscroll = debounce(() => {
            setHasScrolled(getMainScroll() >= 100);
        }, 100);
        const mainEl = document.getElementsByTagName("main").item(0);

        if (mainEl === null) {
            return;
        }

        mainEl.addEventListener("scroll", onscroll);

        return () => {
            mainEl.removeEventListener("scroll", onscroll);
        };
    }, [setHasScrolled]);

    return hasScrolled;
};
