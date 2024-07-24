
import React from 'react';
import {Layout} from "../Component/Layout/index";
import FirstPage from "../Features/Home/Home";

export const Route = [
    {
        path:"/",
        element: <Layout/>,
        children:[
            {
             path:"",
             element:<FirstPage/>
            }
        ]
    }
];