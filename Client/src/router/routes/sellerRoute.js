import { lazy } from 'react';
const Home = lazy(() => import('./../../views/Home'));
import React from "react";

export const sellerRoutes = [
    {
        path: '/',
         element: React.createElement(Home),
        ability: ['admin','seller'],
    
    }
];