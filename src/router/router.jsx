import { Children } from "react";
import {
    createBrowserRouter,
    
  } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Main from "../Layout/Main";
import Admission from "../Pages/Admission";
import Colleges from "../Pages/Colleges";
import Home from "../Pages/Home";
import MyCollege from "../Pages/MyCollege";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <ErrorPage/>,
      children:[
        {
            path:"/",
            element: <Home/>
        },
        {
            path:"/colleges",
            element: <Colleges/>
        },
        {
            path:"/mycolege",
            element: <MyCollege/>
        },
        {
            path:"/admission",
            element: <Admission/>
        },
      ]
      
    },
  ]);

export default router;