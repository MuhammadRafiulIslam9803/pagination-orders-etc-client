import { createBrowserRouter } from "react-router-dom";
import Productonteiner from "../Components/Productonteiner";
import Main from "../Components/Layout/Main";
import Orders from "../Components/Orders";

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
        ]
    },

])
export default router