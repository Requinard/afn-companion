/// <reference types="vite/client" />

import { ReactElement } from "react";
import type { MountReturn } from "cypress/react";

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
