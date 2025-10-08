import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import AppDetails from "../Pages/AppDetails";
import ErrorPage from "../Pages/NotFound";
export const route = createBrowserRouter(
    [
        {
            path: "/",
            element: <RootLayout></RootLayout>,
            errorElement : <ErrorPage></ErrorPage>,
            children :[
                {
                    index : true,
                    Component : Home
                },
                {
                    path : '/apps',
                    element : <Apps></Apps>
                },
                {
                    path : '/apps/:id',
                    Component : AppDetails
                }
               
            ]
            
        }
    ]
)