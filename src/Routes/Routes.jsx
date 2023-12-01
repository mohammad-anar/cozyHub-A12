import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "../Pages/Home/Home";
import Apartment from "../Pages/Apartment/Apartment";
import DashboardLayout from "../Layout/DashboardLayout";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Myprofile from "../Pages/Dashboard.jsx/UserLink/MyProfile/MyProfile";
import Announcement from "../Pages/Dashboard.jsx/UserLink/Announcement/Announcement";
import MakePayment from "../Pages/Dashboard.jsx/MemberLinks/MakePayment";
import AdminProfile from "../Pages/Dashboard.jsx/AdminHome.jsx/AdminProfile/AdminProfile";
import ManageMember from "../Pages/Dashboard.jsx/AdminHome.jsx/ManageMember/ManageMember";
import MakeAnnouncement from "../Pages/Dashboard.jsx/AdminHome.jsx/MakeAnnouncement/MakeAnnouncement";
import AgreementRequest from "../Pages/Dashboard.jsx/AdminHome.jsx/AgreementRequest/AgreementRequest";
import ManageCupons from "../Pages/Dashboard.jsx/AdminHome.jsx/ManageCupons/ManageCupons";
import PrivateRoute from "./PrivateRoute";
import Payment from "../Pages/Dashboard.jsx/Payment/Payment";
import PayemntHistory from "../Pages/Dashboard.jsx/MemberLinks/PayemntHistory";


const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "apartment",
        element: <Apartment />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    children: [
      {
        index: true, 
        element: <Myprofile />,
      },
      {
        path: "announcements",
        element: <Announcement />,
      },
      {
        path: "makepayment",
        element: <MakePayment />,
      },
      {
        index: true,
        path: "admin-profile",
        element: <AdminProfile />,
      },
      {
        path: "manage-members",
        element: <ManageMember />,
      },
      {
        path: "make-announcement",
        element: <MakeAnnouncement />,
      },
      {
        path: "agreement-requests",
        element: <AgreementRequest />,
      },
      {
        path: "manage-cupons",
        element: <ManageCupons />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "payment-history",
        element: <PayemntHistory />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
]);

export default Routes;
