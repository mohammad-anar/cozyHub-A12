import { Link, Outlet } from "react-router-dom";
import logo from "../assets/602232.png"
import NavbarLinks from "../Components/Navbar/NavbarLinks";
const DashboardLayout = () => {
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
          <Link className="flex-1" to={"/"}>
          <div className="flex items-center gap-2 btn btn-ghost px-2 mx-2">
          <img src={logo} className="max-w-[30px] block object-cover"  alt="logo" />
          <h2 className="text-2xl font-bold text-blue-800">Primerental Hub</h2>
          </div>
          </Link>
          <div className="flex-none hidden lg:block">
            <div className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <NavbarLinks></NavbarLinks>
            </div>
          </div>
        </div>
        {/* Page content here */}
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
    );
};

export default DashboardLayout;