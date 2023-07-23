import { Children } from "react";
import {
    createBrowserRouter,
    
  } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Main from "../Layout/Main";
import Admission from "../Pages/Admission";
import Colleges from "../Pages/HomeComponent/Colleges";
import Home from "../Pages/Home";
import CollegeDetails from "../Pages/HomeComponent/CollegeDetails";
import MyCollege from "../Pages/MyCollege";
import Login from "../SignUp/Login.Jsx";
import SignUp from "../SignUp/SignIn";
import PrivateRoute from "./PrivateRoute";
import AllColleges from "../Pages/AllColleges";
import Profile from "../Pages/Profile";

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
            element: <AllColleges/>
        },
        {
            path:"/mycolege",
            element: <MyCollege/>
        },
        {
            path:"/admission",
            element: <Admission/>
        },
        
        {
            path:"/login",
            element: <Login/>
        },
        
        {
            path:"/signin",
            element: <SignUp/>
        },
        
        
        {
            path:"/profile",
            element: <Profile/>
        },

        {
          path: "/colleges/:id",
          element: <PrivateRoute>
            <CollegeDetails/>
          </PrivateRoute> ,
          loader: ({params})=> fetch(`http://localhost:5000/colleges/${params.id}`)
        },
        
      ]
      
    },
  ]);

export default router;