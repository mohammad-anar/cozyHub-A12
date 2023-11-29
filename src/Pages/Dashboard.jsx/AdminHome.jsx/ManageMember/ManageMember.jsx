import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/axiosSecure";
import toast from "react-hot-toast";
import { FallingLines } from "react-loader-spinner";

const ManageMember = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: members,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      return res;
    },
  });

  const handleRemove = (id) => {
    axiosSecure
      .patch(`/users/${id}`)
      .then((res) => {
        console.log(res.data);
        toast.success("user removed");
        refetch();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="p-2 py-8">
      <div>
        <h2 className="text-xl font-semibold ml-2 mb-6">Manage Users</h2>
      </div>
      {isLoading ? (
        <div className="h-screen flex items-center justify-center">
          <FallingLines
            color="#0097e6"
            width="100"
            visible={true}
            ariaLabel="falling-lines-loading"
          />
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table border-b">
            {/* head */}
            <thead>
              <tr className="text-base">
                <th>#</th>
                <th>User name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {members?.data?.map((member, index) => (
                <tr key={member._id}>
                  <th>{index + 1}</th>
                  <td>{member?.name}</td>
                  <td>{member?.email}</td>
                  <td>
                    <button
                      onClick={() => handleRemove(member?._id)}
                      className="btn btn-sm rounded-md bg-red-600 text-white"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageMember;
