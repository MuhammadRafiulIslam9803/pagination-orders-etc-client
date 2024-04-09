import { createBrowserRouter } from "react-router-dom";
import Productonteiner from "../Components/Productonteiner";
import Main from "../Components/Layout/Main";
import Orders from "../Components/Orders";
import Login from "../Components/UserState/Login";
import Registration from "../Components/UserState/Registration";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Productonteiner></Productonteiner>,
            },
            {
                path: '/home',
                element: <Productonteiner></Productonteiner>,
            },
            {
                path: '/orders',
                element: <Orders></Orders>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Registration></Registration>,
            },
        ]
    },

])
export default router