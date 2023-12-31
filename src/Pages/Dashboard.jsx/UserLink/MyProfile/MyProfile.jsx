import { useContext } from "react";
import { AuthContex } from "../../../SignUp/AuthProvider/AuthProvider";
import { FiEdit } from "react-icons/fi";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxionSecure";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic/axiosPublic";

const Myprofile = () => {
  const { user } = useContext(AuthContex);
  const axiosSecure = useAxiosSecure();
  // get agreements 
  const { data: agreements } = useQuery({
    queryKey: ["agreements", user],
    queryFn: async () => {
      const res = await axiosSecure.get(`/agreements?email=${user?.email}`);
      return res;
    },
  });
  // get users with role user 
  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/members`);
      return res;
    },
  });
  // get users with role member 
  const { data: members } = useQuery({
    queryKey: ["members"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      return res;
    },
  });
  // get current user from db 
  const { data: loggedUser } = useQuery({
    queryKey: ["users", user],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user?.email}`);
      return res;
    },
  });
  const axiosPublic = useAxiosPublic();

  // git apartments 
  const { data: apartments } = useQuery({
    queryKey: ["apartments"],
    queryFn: async () => {
      const res = await axiosPublic.get("/apartments");
      return res;
    },
  });
  return (
    <>
      <div className=" items-center mt-6 flex flex-col text-center w-full">
        <div className="max-w-[600px] min-w-[320px] mx-auto">
          <h2 className="text-3xl font-medium  mb-6 text-blue-500">Profile</h2>
          <div className="bg-white rounded-xl flex justify-center lg:min-w-[600px] md:min-w-[400px] items-center flex-col p-12">
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
              <span className="bg-gray-200 rounded-xl px-3">{user?.email}</span>
            </p>
            <button className="btn btn-sm mt-4 w-full ">
              <FiEdit />
              Edit Profile
            </button>
            {loggedUser?.data[0]?.role !== "admin" ? <div className="text-left mt-4 w-full overflow-x-scroll">
              <h2 className="text-lg font-medium"> Agreemented Info:</h2>
              <div >
                <table className="table table-zebra">
                  {/* head */}
                  <thead>
                    <tr className="text-sm">
                      <th>Floor</th>
                      <th>Block</th>
                      <th>Room no</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                   {
                    agreements?.data?.map((agreement) =>  <tr key={agreement?._id}>
                      <td>{agreement?.floor_no}</td>
                      <td>{agreement?.block_name}</td>
                      <td>{agreement?.apartment_no || "A7"}</td>
                      <td className="text-sm">{agreement?.createdAt.slice(4,22)}</td>
                    </tr>)
                   }
                  </tbody>
                </table>
              </div>
            </div>
            :
            <div className="text-left block w-full my-4 mb-0">
              <h2 className="text-left text-lg"><span className="font-semibold">Total rooms:</span> { apartments?.data?.length}</h2>
              <h2 className="text-left text-lg"><span className="font-semibold">Available rooms:</span> </h2>
              <h2 className="text-left text-lg"><span className="font-semibold">Number of Users:</span> { users?.data?.length}</h2>
              <h2 className="text-left text-lg"><span className="font-semibold">Number of Members:</span> { members?.data?.length}</h2>
            </div>
            }

          </div>
        </div>
      </div>
    </>
  );
};

export default Myprofile;
