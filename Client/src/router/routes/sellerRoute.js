import { lazy } from 'react';
const Home = lazy(() => import('../../views/pages/Home'));

export const sellerRoutes = [
    {
        path: '/',
        element: <Home />,
        ability: ['admin','seller'],
    
    },
    // {
    //     path: '/seller/dashboard',
    //     element: Dashboard,
    //     exact: true,
    // },
    // {
    //     path: '/seller/products',
    //     element: Products,
    //     exact: true,
    // },
    // {
    //     path: '/seller/orders',
    //     element: Orders,
    //     exact: true,
    // },
    // {
    //     path: '/seller/settings',
    //     element: Settings,
    //     exact: true,
    // },
];