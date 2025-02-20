import { lazy } from 'react';

// Import your components
const Admin = lazy(() => import('../../views/auth/Admin'));
const Login = lazy(() => import('../../views/auth/Login'));
const Register = lazy(() => import('../../views/auth/Register'));

// Define your lazy components




const PublicRoutes =[
    // define your public routes here
    {
        path: '/login',
        element: <Login/>,
    },
    {
        path: '/register',
        element: <Register/>,
    },
    {
        path: '/admin/login',
        element: <Admin/>,
    }

]

export default PublicRoutes;