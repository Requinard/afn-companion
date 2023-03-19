import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Dashboard, HomeRoute } from "./components";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
        children: [
            {
                path: "",
                element: <HomeRoute />,
            },
        ],
    },
]);

export const AppRoutes = () => <RouterProvider router={routes} />;
