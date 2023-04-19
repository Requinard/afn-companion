import { fireEvent, renderHook, screen } from "@testing-library/react";
import { afterEach, beforeEach, expect } from "vitest";
import { Box } from "@mui/material";
import { resolveBaseUrl } from "vite";
import user from "@testing-library/user-event";

import { useHasScrolled } from "./useHasScrolled";

describe("useHasScrolled", function () {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });
    it("is false when no scrolling", () => {
        const { result } = renderHook(() => useHasScrolled());

        expect(result.current).toBeFalsy();
    });

    it("becomes true after scrolling", async () => {
        const { result, rerender } = renderHook(() => useHasScrolled(), {
            wrapper: ({ children }) => (
                <Box role={"row"} height={90000}>
                    {children}
                </Box>
            ),
        });

        expect(result.current).toBeFalsy();

        fireEvent.scroll(screen.getByRole("row"), {
            target: {
                scrollTop: 1500,
            },
        });

        rerender({ key: 1 });

        vi.runAllTimers();

        expect(result.current).toBeTruthy();
    });
});
