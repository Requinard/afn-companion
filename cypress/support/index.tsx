import { ReactElement } from "react";
import { mount } from "cypress/react";
import type { MountReturn } from "cypress/react";
import { BrowserRouter } from "react-router-dom";

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
            /**
             * Custom command to select DOM element by data-cy attribute.
             * @example cy.dataCy('greeting')
             */
            mount(children: ReactElement): Chainable<MountReturn>;
        }
    }
}

Cypress.Commands.add("mount", (children: ReactElement) =>
    mount(<BrowserRouter>{children}</BrowserRouter>)
);
