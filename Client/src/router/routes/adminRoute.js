import React from "react";
import { lazy } from 'react';
const AdminDashboard = lazy(() => import('../../views/admin/AdminDashboard'));
const Orders = lazy(() => import('../../views/admin/Orders'));
const Category = lazy(() => import('../../views/admin/Category'));
const Sellers = lazy(() => import('../../views/admin/Sellers'));
const PaymentRequest = lazy(() => import('../../views/admin/PaymentRequest'));
const DeactivateSeller = lazy(() => import('../../views/admin/DeactivateSeller'));
const SellerRequest = lazy(() => import('../../views/admin/SellerRequest'));
const SellerDetails = lazy(() => import('./../../views/admin/SellerDetails'));

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
    {
        path: 'admin/dashboard/deactive-sellers',
        element: React.createElement(DeactivateSeller),
        role: 'admin'
    },
    {
        path: 'admin/dashboard/seller-requests',
        element: React.createElement(SellerRequest),
        role: 'admin'
    },
    {
        path: 'admin/dashboard/seller/details/:sellerId',
        element: React.createElement(SellerDetails),
        role: 'admin'
    },
];