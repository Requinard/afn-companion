import { Route, Routes } from "react-router-dom";

import { HomePage } from "./components/Home/HomePage";

export const AppRoutes = () => (
    <Routes>
        <Route path={"/"} element={<HomePage />} />
    </Routes>
);
