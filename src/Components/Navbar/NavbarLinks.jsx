import { Link, NavLink } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { MdApartment } from "react-icons/md";
import { LuLogIn } from "react-icons/lu";
import profile from "../../assets/avater.png";
import { IoMenu } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { useContext } from "react";
import { AuthContex } from "../../Pages/SignUp/AuthProvider/AuthProvider";

const NavbarLinks = () => {
  const { user, logout } = useContext(AuthContex);

  return (
    <>
      <div title="Home" className=" btn btn-ghost">
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-gray-300 text-blue-600 p-2 rounded-xl"
              : ""
          }
        >
          <GoHomeFill size={30} />
        </NavLink>
      </div>
      <div title="Apartment" className=" btn btn-ghost">
        <NavLink
          to={"/apartment"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-gray-300 text-blue-600 p-2 rounded-xl"
              : ""
          }
        >
          <MdApartment size={30} />
        </NavLink>
      </div>
      {user ? (
        <div className="dropdown dropdown-end rounded-full p-2 flex justify-start">
          <label tabIndex={0} className="m-1">
            <div className="flex items-center justify-start bg-white p-2 rounded-full px-6 shadow-xl border-2 gap-2 border-gray-300">
              <IoMenu size={30} />
              <img
                className="w-[50px] h-[50px] border p-2 object-cover rounded-full"
                src={user?.photoURL || profile}
                alt="profile pic"
              />
            </div>
          </label>
          <div
            tabIndex={0}
            className="dropdown-content mt-[90px] md:-mr-2 md:w-[350px] px-6 py-4 text-center mr-3 z-[1] menu p-2 shadow bg-base-100 rounded-box"
          >
            <div>
              <img
                className="w-[80px] h-[80px] border p-2 mx-auto object-cover rounded-full"
                src={user?.photoURL || profile}
                alt="profile pic"
              />
              <h2 className="text-xl font-medium">
                {user?.displayName || "Anarul Islam"}
              </h2>
              <p>{user?.email || "anar@gmail.com"}</p>
              <hr className="mt-4" />
              <Link to="/dashboard">
                <button className="btn btn-sm btn-ghost rounded-2xl mt-4 w-full">
                  <MdSpaceDashboard />
                  Dashboard
                </button>
              </Link>
              <button
                onClick={() => logout()}
                className="btn btn-sm  rounded-2xl mt-2 w-full"
              >
                <FiLogOut />
                Logout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div title="Login" className="ml-6 ">
          <NavLink
            to={"/login"}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "bg-gray-300 btn btn-outline duration-500 px-4 text-blue-600 w-full p-2 rounded-xl"
                : "w-full bg-gray-300 btn btn-outline duration-500 px-4 text-blue-600"
            }
          >
            <div className="flex items-center justify-start gap-3 w-full -ml-4">
              <LuLogIn size={30} />
              <h2>Login</h2>
            </div>
          </NavLink>
        </div>
      )}
    </>
  );
};

export default NavbarLinks;
