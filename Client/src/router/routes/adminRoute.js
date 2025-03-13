import React from "react";
import { lazy } from 'react';
const AdminDashboard = lazy(() => import('../../views/admin/AdminDashboard'));
const Orders = lazy(() => import('../../views/admin/Orders'));


export const adminRoutes = [
    {
        path: 'admin/dashboard',
        element: React.createElement(AdminDashboard),
        role: 'admin'
    },
    {
        path: 'admin/dashboard/orders',
        element: React.createElement(Orders),
        role: 'admin'
    },
];