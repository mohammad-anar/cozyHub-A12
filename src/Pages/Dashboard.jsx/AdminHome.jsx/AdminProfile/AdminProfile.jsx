import { useContext } from "react";
import { AuthContex } from "../../../SignUp/AuthProvider/AuthProvider";
import { FiEdit } from "react-icons/fi";
// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../../../Hooks/useAxiosSecure/axiosSecure";

const AdminProfile = () => {
    const { user } = useContext(AuthContex);
    // const axiosSecure = useAxiosSecure();
    // const { data: agreements } = useQuery({
    //   queryKey: ["agreements", user],
    //   queryFn: async () => {
    //     const res = await axiosSecure.get(`/agreements?email=${user?.email}`);
    //     return res;
    //   },
    // });
    return (
      <>
        <div className=" items-center mt-6 flex flex-col text-center w-full">
          <div className="max-w-[600px] min-w-[320px] mx-auto">
            <h2 className="text-3xl font-medium  mb-6">Admin Profile</h2>
            <div className="bg-white rounded-xl flex justify-center items-center flex-col p-12">
              <img
                className="w-[100px] h-[100px] rounded-full"
                src={user?.photoURL}
                alt=""
              />
              <h2 className="text-xl font-medium mt-4">
                Name: {user?.displayName}
              </h2>
              <p className="text-base mt-2">
                Email:{" "}
                <span className="bg-gray-200 rounded-xl px-3 ">{user?.email}</span>
              </p>
              <button className="btn btn-sm mt-4 w-full ">
                <FiEdit />
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };

export default AdminProfile;