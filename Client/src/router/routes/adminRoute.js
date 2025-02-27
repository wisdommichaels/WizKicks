import { lazy } from 'react';
const AdminDashboard = lazy(() => import('../../views/admin/AdminDashboard'));
import React from "react";


export const adminRoutes = [
    {
        path: 'admin/dashboard',
        element: React.createElement(AdminDashboard),
        role: 'admin'
    }
];