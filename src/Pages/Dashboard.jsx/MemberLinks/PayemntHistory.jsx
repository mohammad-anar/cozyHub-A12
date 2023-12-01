import { useContext } from "react";
import { AuthContex } from "../../SignUp/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxionSecure";

const PayemntHistory = () => {
  const { user } = useContext(AuthContex);
  const axiosSecure = useAxiosSecure();
  const { data: payments } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      return res;
    },
  });
  return (
    <div className="m-4 p-6 ">
      <div className="my-4">
        <h2 className="text-xl font-semibold text-blue-500">Payemnt History</h2>
      </div>
      <div className="overflow-x-scroll ">
            <table className="table table-xs z-0 w-full table-pin-rows table-pin-cols">
              <thead>
                <tr className="overflow-x-scroll">
                  <th>#</th>
                  <td>Eamil</td>
                  <td>pay month</td>
                  <td>Floor no</td>
                  <td>Block name</td>
                  <td>Room no</td>
                  <td>Rent</td>
                  <th>payment date</th>
                </tr>
              </thead>
              <tbody>
                {payments?.data?.map((payment, indx) => (
                  <tr key={payment._id}>
                    <td>{indx + 1}</td>
                    <td>{payment?.email}</td>
                    <td>{payment?.pay_month}</td>
                    <td>{payment?.floor_no}</td>
                    <td>{payment?.block_name}</td>
                    <td>{payment?.apartment_no}</td>
                    <td>{payment?.rent}</td>
                    <td>{payment?.payment_date?.slice(4, 22)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
    </div>
  );
};

export default PayemntHistory;
