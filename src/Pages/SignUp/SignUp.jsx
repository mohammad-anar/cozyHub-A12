import axios from "axios";
import { useForm } from "react-hook-form";
import logo from "../../assets/602232.png";
import { useContext } from "react";
import { AuthContex } from "./AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import Sidebar from "../../Components/Sidebar/Sidebar";
import NavbarLinks from "../../Components/Navbar/NavbarLinks";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAxiosPublic from "../../Hooks/useAxiosPublic/axiosPublic";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const { createUser, updateUser, googleSignin } = useContext(AuthContex);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const image = data.photo[0];
    const formData = new FormData();
    formData.append("image", image);
    const { data: resData } = await axios.post(
      `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API}`,
      formData
    );
    const photo = resData?.data?.display_url;

    // create user from firebase
    createUser(email, password)
      .then(() => {
        toast.success("User Register");
        updateUser(name, photo)
          .then(() => {
            axiosPublic
              .post("/users", {
                name,
                email,
                photo,
                role: "user",
                createdAt: new Date("2023-11-29").toUTCString(),
              })
              .then((res) => {
                console.log(res.data);
              })
              .catch((err) => console.log(err));
          })
          .catch((err) => toast.error(err.message));
      })
      .catch((err) => toast.error(err.message));
    // update profile
  };

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
            <Link
              className="sm:flex  hidden gap-2 btn btn-ghost px-2 mx-2"
              to={"/"}
            >
              <img
                src={logo}
                className="max-w-[40px] block object-cover"
                alt="logo"
              />
              <h2
                style={{ fontFamily: "verdana" }}
                className="font-bold text-blue-800 text-3xl"
              >
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
        <div className="px-12 flex flex-col items-center justify-center min-h-screen">
          <form
            className="flex flex-col items-center p-12 px-16 shadow-xl w-[320px] md:w-[450px] lg:w-[520px] mx-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h2 className="my-12 mt-4 text-blue-600 text-3xl font-medium">
              Sign Up
            </h2>
            {/* input 1  */}
            <div className="w-full">
              <label className="font-bold mb-2 inline-block" htmlFor="name">
                Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border w-full p-2 outline-gray-400"
                {...register("name", { required: true })}
                placeholder="Enter your name "
              />
              {errors.name && (
                <span className="text-red-600 text-sm">Name is required</span>
              )}
            </div>
            {/* input 2  */}
            <div className="w-full mt-4">
              <label className="font-bold mb-2 inline-block" htmlFor="photo">
                Photo <span className="text-red-600">*</span>
              </label>
              <input
                type="file"
                id="photo"
                name="photo"
                className="border w-full outline-gray-400 file-input file-input-bordered  rounded-none"
                {...register("photo", { required: true })}
              />
              {errors.photo && (
                <span className="text-red-600 text-sm">Photo is required</span>
              )}
            </div>
            {/* input 3  */}
            <div className="w-full mt-4">
              <label className="font-bold mb-2 inline-block" htmlFor="email">
                Email<span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border w-full p-2 outline-gray-400"
                {...register("email", { required: true })}
                placeholder="Enter your email "
              />
              {errors.email && (
                <span className="text-red-600 text-sm">email is required</span>
              )}
            </div>
            {/* input 3  */}
            <div className="w-full mt-4">
              <label className="font-bold mb-2 inline-block" htmlFor="password">
                Password<span className="text-red-600">*</span>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="border w-full p-2 outline-gray-400"
                {...register("password", { required: true })}
                placeholder="Enter your password "
              />
              {errors.password && (
                <span className="text-red-600 text-sm">
                  password is required
                </span>
              )}
            </div>

            <input
              type="submit"
              value={"Sign Up"}
              className="btn bg-blue-600 text-white font-bold w-full mt-4 rounded-none"
            />
            <div className="divider">OR</div>
            <div>
              <h2 className="text-lg font-medium text-center">Sign In with</h2>
              <div className="w-full flex items-center justify-center mt-6">
                <div
                  onClick={() => {
                    googleSignin()
                      .then((res) => {
                        console.log(res.user);
                        toast.success("Login successful");
                        navigate(`${location?.state || "/"}`);
                      })
                      .catch((err) => {
                        console.log(err);
                        toast.error(err.message);
                      });
                  }}
                  className="border-2 p-2 rounded-full border-blue-300 hover:bg-gray-200"
                >
                  <FcGoogle size={25} />
                </div>
              </div>
              <h2 className="mt-4">
                Already have an account?{" "}
                <Link className="text-blue-600 font-medium" to="/login">
                  Login
                </Link>
              </h2>
            </div>
          </form>
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

export default SignUp;
