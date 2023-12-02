import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxionSecure";
import toast from "react-hot-toast";
import { FallingLines } from "react-loader-spinner";
import { useContext } from "react";
import { AuthContex } from "../../../SignUp/AuthProvider/AuthProvider";

const AgreementRequest = () => {
  const {user} = useContext(AuthContex);
  const axiosSecure = useAxiosSecure();
  const {
    data: agreements,
    refetch,
    isloading,
  } = useQuery({
    queryKey: ["agreements"],
    queryFn: async () => {
      const res = await axiosSecure.get("/agreements");
      return res;
    },
  });
  console.log(agreements?.data);
  const handleAccept = (id) => {
    axiosSecure
      .put(`agreements/${id}`)
      .then((res) => {
        console.log(res.data);
        toast.success("status updated");
        refetch()
      })
      .catch((err) => {
        toast.error(err.message);
      });
    axiosSecure.put(`users/${user?.email}`).then((res) => {
      console.log(res.data);
      if(res?.data?.modifiedCount > 0){        
          toast.success("user updated");
      }
    });
  };
  const handleReject = (id) => {
    axiosSecure
      .delete(`/agreements/${id}`)
      .then((res) => {
        console.log(res.data);
        if(res?.data?.modifiedCount > 0){        
            toast.success("rejected");
        }
        refetch();
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };
  return (
    <div className="p-2 md:p-4 lg:p-12 bg-white m-2 md:m-4 lg:m-0 lg:mt-6 w-[350px] min-w-full xs:w-full sm:max-w-full md:max-w-full mx-auto">
      <h2 className="text-2xl font-medium mb-6 text-blue-500">Agreements Requests</h2>
      {isloading ? (
        <div className="h-screen flex items-center justify-center">
          <FallingLines
            color="#4834d4"
            width="100"
            visible={true}
            ariaLabel="falling-lines-loading"
          />
        </div>
      ) : (
        <div>
          <div className="overflow-x-scroll">
            <table className="table table-xs z-0 w-full table-pin-rows table-pin-cols">
              <thead>
                <tr className="overflow-x-scroll">
                  <th>#</th>
                  <td>User Name</td>
                  <td>Eamil</td>
                  <td>Floor no</td>
                  <td>Block name</td>
                  <td>Room no</td>
                  <td>Rent</td>
                  <th>Req date</th>
                  <th>Action</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {agreements?.data?.map((agreement, indx) => (
                  <tr key={agreement._id}>
                    <th>{indx + 1}</th>
                    <td>{agreement?.userName}</td>
                    <td>{agreement?.userEmail}</td>
                    <td>{agreement?.floor_no}</td>
                    <td>{agreement?.block_name}</td>
                    <td>{agreement?.apartment_no}</td>
                    <td>{agreement?.rent}</td>
                    <td>{agreement?.createdAt.slice(4, 22)}</td>
                    <td>
                      <button
                      disabled={agreement.status === "checked"}
                        onClick={() => handleAccept(agreement?._id)}
                        className="btn btn-sm bg-green-600 text-white"
                      >
                        {
                          (agreement.status === "checked")? "Accepted": "Accept"
                        }
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => handleReject(agreement?._id)}
                        className="btn btn-sm bg-red-600 text-white"
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default AgreementRequest;
