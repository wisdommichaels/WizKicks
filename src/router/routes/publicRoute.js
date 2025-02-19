import { lazy } from "react";

// Define your lazy components
const Login = lazy(() => import('./../../views/auth/Login'));
const Register = lazy(() => import('./../../views/auth/Register'));


const PublicRoutes =[
    // define your public routes here
    {
        path: '/login',
        element: <Login/>,
    },
    {
        path: '/register',
        element: <Register/>,
    }

]

export default PublicRoutes;