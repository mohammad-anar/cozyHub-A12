import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "../Pages/Home/Home";
import Apartment from "../Pages/Apartment/Apartment";
import DashboardLayout from "../Layout/DashboardLayout";
import UserHome from "../Pages/Dashboard.jsx/UserHOme.jsx/UserHome";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Myprofile from "../Pages/Dashboard.jsx/UserLink/MyProfile/MyProfile";
import Announcement from "../Pages/Dashboard.jsx/UserLink/Announcement/Announcement";
import MakePayment from "../Pages/Dashboard.jsx/MemberLinks/MakePayment";

const Routes = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        errorElement:<ErrorPage/>,
        children: [
            {
                index:true,
                element:<Home/>
            },
            {
                path: "apartment",
                element:<Apartment/>
            },
        ]
    },
    {
        path: "/dashboard",
        element:<DashboardLayout/>,
        children: [
            {
                index:true,
                element: <UserHome/>
            },
            {
                path:"my-profile",
                element: <Myprofile/>
            },
            {
                path:"announcements",
                element: <Announcement/>
            },
            {
                path:"makepayment",
                element: <MakePayment/>
            },
        ]
    },
    {
        path:"login",
        element: <Login/>
    },
    {
        path:"signup",
        element: <SignUp/>
    }
])

export default Routes;