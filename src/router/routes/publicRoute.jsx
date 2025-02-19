
import Login from './../../views/auth/Login';
import Register from './../../views/auth/Register';

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
    }

]

export default PublicRoutes;