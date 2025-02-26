import { lazy } from 'react';
const AdminDashboard = lazy(() => import('../../views/admin/AdminDashboard'));
export const adminRoutes = [
    {
        path: 'admin/dashboard',
        element: <AdminDashboard />,
        ability: 'admin'
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