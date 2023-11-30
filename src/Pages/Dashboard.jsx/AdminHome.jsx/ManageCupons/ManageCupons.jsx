import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/axiosSecure";

const ManageCupons = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: cupons,
    isloading,
    refetch,
  } = useQuery({
    queryKey: ["cupons"],
    queryFn: async () => {
      const res = await axiosSecure.get("/cupons");
      return res;
    },
  });
  console.log(cupons?.data);
  return (
    <div className="m-2 mt-8">
      <h2 className="text-xl font-semibold mb-4 ml-2">Manage Cupons</h2>
      <div className="p-2 md:p-4 lg:p-12 bg-white m-2 md:m-4 lg:m-0 lg:mt-6 w-[350px] min-w-full xs:w-full sm:max-w-full md:max-w-full mx-auto overflow-x-scroll">
        <table className="table table-xs table-pin-rows min-w-full overflow-x-scroll table-pin-cols z-0 border-b">
          <thead>
            <tr>
              <th>#</th>
              <td>Cupon code</td>
              <td>Discount</td>
              <td>Description</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {isloading ? (
              <h2>Loading......</h2>
            ) : (
              cupons?.data?.map((cupon, indx) => (
                <tr key={cupon._id}>
                  <th>{indx + 1}</th>
                  <td>{cupon?.cupon_code}</td>
                  <td>{cupon?.discount}%</td>
                  <td>{cupon?.cupon_description.slice(0, 20)}.....</td>
                  <td>
                    <button className="btn btn-sm bg-red-600 text-white">
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-center">
        <button className="btn btn-outline mt-4 mx-auto border-blue-600 text-blue-600 duration-500">Add a cupon</button>
      </div>
    </div>
  );
};

export default ManageCupons;
