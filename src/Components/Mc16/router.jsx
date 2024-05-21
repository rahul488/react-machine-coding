import { createBrowserRouter } from "react-router-dom";
import Index from "./Index";
import Home from "./Home";
import Layout from "./Layout";

const routes = [
    {
        index:true,
        element:<Home />
    }
]

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout />,
        children:routes

    }
])