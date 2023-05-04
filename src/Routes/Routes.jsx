import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../components/MainHome/Home/Home";
import Blog from "../components/Blog/Blog";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import ChefDetails from "../components/ChefDetails/ChefDetails";
import Chef from "../components/Chef/Chef";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: (() => fetch('http://localhost:5000/chef'))
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: '/chef-details/:id',
                element: <PrivateRoutes><ChefDetails></ChefDetails></PrivateRoutes>,
                loader: (({ params }) => fetch(`http://localhost:5000/chef/${params.id}`))
            },
        ]

    },
]);

export default router