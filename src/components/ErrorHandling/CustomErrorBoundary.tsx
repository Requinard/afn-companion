import * as Sentry from "@sentry/react";
import { PropsWithChildren } from "react";

import { ErrorFallback } from "./ErrorFallback";

export const CustomErrorBoundary = ({ children }: PropsWithChildren) => {
    return (
        <Sentry.ErrorBoundary fallback={ErrorFallback}>
            {children}
        </Sentry.ErrorBoundary>
    );
};
