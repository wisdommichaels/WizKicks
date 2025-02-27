import {MainLayout} from '../../Layout/MainLayout';
import {PrivateRoute} from './PrivateRoute';

export const getRoutes = () => {
    return{
            path: "/",
            element: <MainLayout/>,
            children: <PrivateRoute/>
        }
}