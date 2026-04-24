
import Root from "../Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Banner from "../Component/Banner/Banner";
import Installed from "../Component/InstalledApps/Installed";
import { createBrowserRouter } from "react-router";
import AppDetails from "../Component/Details/AppDetails";
import Apps from "../Component/AllApps/Apps";
import InstalledApps from "../Component/AllApps/InstalledApps";



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
                path:'/app/:id',
                Component: AppDetails,
                
            },
            {
                path:'ourApps',
                Component: Apps
            },
            {
                path: 'installedApps',
                Component: InstalledApps,
            }

        ]

    }
])