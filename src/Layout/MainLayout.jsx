import { Link, Outlet } from "react-router-dom";
import logo from "../assets/602232.png";
import NavbarLinks from "../Components/Navbar/NavbarLinks";
import Sidebar from "../Components/Sidebar/Sidebar";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
  
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-white shadow-md bg-opacity-10">
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

          <div className=" flex-1 ">
            <Link className="sm:flex  hidden gap-2 btn btn-ghost px-2 mx-2"  to={"/"}>
              <img
                src={logo}
                className="max-w-[40px] block object-cover"
                alt="logo"
              />
              <h2 className="text-3xl font-bold text-blue-800">
                PRH
              </h2>
            </Link>
          </div>

          <div className="flex-none hidden md:block">
            <div className="menu menu-horizontal flex items-center">
              {/* Navbar menu content here */}
              <NavbarLinks></NavbarLinks>
            </div>
          </div>
        </div>
        {/* Page content here */}
        <Outlet></Outlet>
        <Footer></Footer>
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

export default MainLayout;
