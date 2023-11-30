import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/axiosSecure";
import toast from "react-hot-toast";
import { FallingLines } from "react-loader-spinner";

const AgreementRequest = () => {
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
      })
      .catch((err) => {
        toast.error(err.message);
      });
    axiosSecure.put(`users/${id}`).then((res) => {
      console.log(res.data);
      toast.success("user updated");
    });
  };
  const handleReject = (id) => {
    axiosSecure
      .delete(`/agreements/${id}`)
      .then((res) => {
        console.log(res.data);
        toast.success("rejected");
        refetch();
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };
  return (
    <div className="p-2 md:p-4 lg:p-12 bg-white m-2 md:m-4 lg:m-0 lg:mt-6 w-[350px] min-w-full xs:w-full sm:max-w-full md:max-w-full mx-auto">
      <h2 className="text-2xl font-medium mb-6">Agreements Requests</h2>
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
                        onClick={() => handleAccept(agreement?._id)}
                        className="btn btn-sm bg-green-600 text-white"
                      >
                        Accept
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
