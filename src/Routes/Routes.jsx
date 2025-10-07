import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home";

export const route = createBrowserRouter(
    [
        {
            path: "/",
            element: <RootLayout></RootLayout>,
            children :[
                {
                    index : true,
                    Component : Home
                },
               
            ]
            
        }
    ]
)