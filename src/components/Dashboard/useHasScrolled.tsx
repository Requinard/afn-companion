import { useWindowScroll } from "react-use";
import { useMemo } from "react";

export const useHasScrolled = () => {
    const { y } = useWindowScroll();

    return useMemo(() => {
        return y > 0;
    }, [y]);
};
