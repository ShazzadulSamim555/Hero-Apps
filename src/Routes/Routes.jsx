
import Root from "../Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Banner from "../Component/Banner/Banner";
import Installed from "../Component/InstalledApps/Installed";
import { createBrowserRouter } from "react-router";



export const router= createBrowserRouter([
    {
        path:'/',
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                index: true,
                path:'/',
                Component: Banner
            },
            {
                path:'apps',
                
            },
            {
                path: 'installedApps',
                Component:Installed,
            }

        ]

    }
])