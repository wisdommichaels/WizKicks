import { lazy } from 'react';
import React from "react";
const Home = lazy(() => import('./../../views/Home'));
const SellerDashboard = lazy(() => import('./../../views/seller/SellerDashboard'));
const AddProduct = lazy(() => import('./../../views/seller/AddProduct'));

export const sellerRoutes = [
    {
        path: '/',
         element: React.createElement(Home),
        ability: ['admin','seller'],
    
    },
    {
        path: '/seller/dashboard',
         element: React.createElement(SellerDashboard),
        ability: ['seller'],
    
    },
    {
        path: '/seller/dashboard/add-product',
         element: React.createElement(AddProduct),
        ability: ['seller'],
    
    }
];