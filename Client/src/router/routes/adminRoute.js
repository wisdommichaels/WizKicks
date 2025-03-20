import React from "react";
import { lazy } from 'react';
const AdminDashboard = lazy(() => import('../../views/admin/AdminDashboard'));
const Orders = lazy(() => import('../../views/admin/Orders'));
const Category = lazy(() => import('../../views/admin/Category'));
const Sellers = lazy(() => import('../../views/admin/Sellers'));
const PaymentRequest = lazy(() => import('../../views/admin/PaymentRequest'));


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
    {
        path: 'admin/dashboard/category',
        element: React.createElement(Category),
        role: 'admin'
    },
    {
        path: 'admin/dashboard/sellers',
        element: React.createElement(Sellers),
        role: 'admin'
    },
    {
        path: 'admin/dashboard/payment-requests',
        element: React.createElement(PaymentRequest),
        role: 'admin'
    },
];