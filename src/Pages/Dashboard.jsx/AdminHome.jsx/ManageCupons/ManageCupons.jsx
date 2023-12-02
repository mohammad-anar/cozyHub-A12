import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxionSecure";
import toast from "react-hot-toast";

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
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const cupon_code = form.cupon_code.value;
    const discount = form.discount.value;
    const cupon_description = form.description.value;
    const cupon = {
        cupon_code,
        discount,
        cupon_description
    }
    axiosSecure.post("/cupons", cupon)
    .then(res => {
        console.log(res.data);
        if(res?.data?.insertedId) {
            toast.success("cupon added🔥");
        }
        refetch();
    })
    .catch(err => console.log(err))
  }
  const handleRemove = (id) => {
    console.log(id);
    axiosSecure.delete(`/cupons/${id}`)
    .then(res => {
      console.log(res);
      toast.success("removed")
      refetch()
    }).catch(err=>{
      console.log(err);
      toast.error(err.message)
    })
  }
  return (
    <div className="m-2 mt-8">
      <h2 className="text-xl font-semibold mb-4 ml-2 text-blue-500">Manage Cupons</h2>
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
                  <td>{cupon?.cupon_description?.slice(0, 20)}{(cupon?.cupon_description?.length > 20)? "....." : "" }</td>
                  <td>
                    <button onClick={() =>handleRemove(cupon._id)} className="btn btn-sm bg-red-600 text-white">
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
        <button className="btn btn-outline mt-4 mx-auto border-blue-600 text-blue-600 duration-500">
          <label htmlFor="my_modal_7" className=" w-full">
            Add a cupon
          </label>
        </button>
      </div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box p-8">
          <form onSubmit={handleSubmit}>
            {/* input 1  */}
            <div className="flex flex-col">
              <label htmlFor="cupon-code" className="text-sm mb-2 font-medium">
                Cupon code
              </label>
              <input
                id="cupon-code"
                type="text"
                name="cupon_code"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            {/* input 2  */}
            <div className="flex flex-col mt-4">
              <label htmlFor="discount" className="text-sm mb-2 font-medium">
                Discount %
              </label>
              <input
                id="discount"
                name="discount"
                type="number"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            {/* input 2  */}
            <div className="flex flex-col mt-4">
              <label htmlFor="description" className="text-sm mb-2 font-medium">
                Description
              </label>
              <textarea
                className="textarea textarea-bordered resize-none"
                id="description"
                name="description"
                rows="4"
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button className="btn mt-4 btn-outline border-blue-600 text-blue-600" type="submit">Add</button>
            </div>
          </form>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </div>
  );
};

export default ManageCupons;
