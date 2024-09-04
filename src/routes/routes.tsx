import React from "react";
import HomePage from "../pages/HomePage";

export interface IRoute{
    path:string
    name:string
    element:React.ReactNode
}
const routes:IRoute[] = [
    {path:'/',name:'Home', element:<HomePage/> }
]

export default routes;