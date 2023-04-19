import { Box } from "@mui/material";

import { useHasScrolled } from "./useHasScrolled";

const Fixture = () => {
    const hasScrolled = useHasScrolled();

    return <Box height={9000}>{hasScrolled ? "no scroll" : "yes scroll"}</Box>;
};

describe("useHasScrolled", function () {
    it("does not display", () => {
        cy.mount(<Fixture />);

        cy.get("no scroll").should("exist");
    });
    it("starts displaying after scroll", () => {
        cy.mount(<Fixture />);

        cy.get("yes scroll").should("exist");
    });
});
