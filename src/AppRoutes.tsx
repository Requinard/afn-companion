import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { HomePage } from "./components/Home/HomePage";
import { Dashboard } from "./components";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
        children: [
            {
                path: "",
                element: <HomePage />,
            },
        ],
    },
]);

export const AppRoutes = () => <RouterProvider router={routes} />;
