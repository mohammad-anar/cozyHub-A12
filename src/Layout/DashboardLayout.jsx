import { Outlet } from "react-router-dom";
import Sidebar from "../Pages/Dashboard.jsx/Sidebar";
const DashboardLayout = () => {
  return (
    <div className="drawer min-h-screen bg-gray-100 relative w-full">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-white md:hidden shadow-md bg-opacity-10">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
        </div>
        {/* Page content here */}
        <div className="flex ">
          <div
            id="sidebar"
            className=" min-w-[256px]  px-2 pt-6 bg-gray-200  hidden md:block sticky min-h-screen top-0 left-0"
          >
            <div className="flex flex-col gap-3 ">
              <Sidebar></Sidebar>
            </div>
          </div>
          <div className="px-4 w-full">
          <Outlet></Outlet>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          <Sidebar></Sidebar>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
