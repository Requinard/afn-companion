import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
    Dashboard,
    HomeRoute,
    ResearchAndDevelopmentRoute,
} from "./components";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
        children: [
            {
                path: "",
                element: <HomeRoute />,
            },
            {
                path: "/research-and-development",
                element: <ResearchAndDevelopmentRoute />,
            },
        ],
    },
]);

export const AppRoutes = () => <RouterProvider router={routes} />;
