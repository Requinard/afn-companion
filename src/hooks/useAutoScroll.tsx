import { useLocation } from "react-router-dom";
import { useDebounce } from "usehooks-ts";
import { useEffect } from "react";

export const useAutoScroll = () => {
    const { pathname } = useLocation();
    const debouncedPathname = useDebounce(pathname, 150);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [debouncedPathname]);
};
