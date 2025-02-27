import MainLayout from "../../Layout/MainLayout";
import { privateRoutes } from "./PrivateRoute";
import React from "react";

export const getRoutes = () => ({
    path: '/',
    element: React.createElement(MainLayout), // Convert JSX to a function call
    children: [...privateRoutes]
});
