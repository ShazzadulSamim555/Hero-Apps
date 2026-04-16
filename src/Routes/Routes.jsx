import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Banner from "../Component/Banner/Banner";

export const router= createBrowserRouter([
    {
        path:'/',
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:'apps',
                Component:Banner,
            }
        ]

    }
])