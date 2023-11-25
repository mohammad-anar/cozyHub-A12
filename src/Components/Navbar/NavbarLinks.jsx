import { NavLink } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { MdApartment } from "react-icons/md";
import { LuLogIn } from "react-icons/lu";
import profile from "../../assets/avater.png"
import { IoMenu } from "react-icons/io5";

const NavbarLinks = () => {
    const user  = true;
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
      {user?  
      <div className=" ml-2 rounded-full p-2 flex justify-start">
        <div className="flex items-center gap-2 justify-start bg-white p-2 rounded-full px-6 shadow-xl border-2 border-gray-300">
            <IoMenu size={30}/>
            <img className="w-[40px] border p-2 object-cover rounded-full" src={profile} alt="profile pic" />
        </div>
      </div>
      :
      <div title="Login" className=" btn btn-ghost ml-6 ">
        <NavLink
          to={"/login"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-gray-300 text-blue-600 w-full p-2 rounded-xl"
              : "w-full p-2"
          }
        >
          <div className="flex items-center justify-start gap-3 w-full -ml-4">
          <LuLogIn size={30} /> 
          <h2>Login</h2>
          </div>
        </NavLink>
      </div>}
    </>
  );
};

export default NavbarLinks;
