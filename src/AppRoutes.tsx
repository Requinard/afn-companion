import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Dashboard, HomeRoute } from "./components";
import { ResearchAndDevelopmentRoute } from "./components/ResearchAndDevelopment/ResearchAndDevelopmentRoute";

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
