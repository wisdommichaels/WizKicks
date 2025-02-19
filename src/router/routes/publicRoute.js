import { lazy } from "react";

// Define your lazy components
const Login = lazy(() => import('../../views/auth/Login'));
const Register = lazy(() => import('../../views/auth/Register'));


const publicRoutes =[
    // define your public routes here
    {
        path: '/login',
        component: <Login/>,
    },
    {
        path: '/register',
        component: <Register/>,
    }

]

export default publicRoutes;