import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import { FaRegCaretSquareDown } from "react-icons/fa";
import { AuthContex } from "../../SignUp/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxionSecure";

const MakePayment = () => {
  const { user } = useContext(AuthContex);
  const [startDate, setStartDate] = useState(new Date());
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    console.log(name, email, password);
  };
  const axiosSecure = useAxiosSecure();
  const { data: agreements } = useQuery({
    queryKey: ["agreements", user],
    queryFn: async () => {
      const res = await axiosSecure.get(`/agreements?email=${user?.email}`);
      return res;
    },
  });
  return (
    <div className="px-12 flex flex-col items-center justify-center min-h-screen">
      <form
        className="flex flex-col items-center p-12 px-16 shadow-xl w-[320px] md:w-[450px] lg:w-[520px] mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="my-12 mt-4 text-blue-600 text-3xl font-medium">
          Make Payment
        </h2>

        {/* input 1 */}
        <div className="w-full mt-4">
          <label className="font-bold mb-2 inline-block" htmlFor="email">
            Email<span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue={agreements?.data[0].userEmail}
            className="border w-full p-2 outline-gray-400"
            {...register("email")}
            placeholder="Email "
            readOnly
          />
        </div>
        {/* input 2  */}
        <div className="w-full mt-4">
          <label className="font-bold mb-2 inline-block" htmlFor="block-name">
            Bock name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="block-name"
            name="block-name"
            defaultValue={agreements?.data[0].block_name}
            className="border w-full p-2 outline-gray-400"
            {...register("block_name")}
            placeholder="Enter block name "
            readOnly
          />
        </div>
        {/* input 3  */}
        <div className="w-full mt-4">
          <label className="font-bold mb-2 inline-block" htmlFor="floor-no">
            Floor no <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="floor-no"
            name="floor-no"
            defaultValue={agreements?.data[0].floor_no}
            className="border w-full p-2 outline-gray-400"
            {...register("floor_no")}
            placeholder="Enter floor no "
            readOnly
          />
        </div>
        {/* input 4  */}
        <div className="w-full mt-4">
          <label className="font-bold mb-2 inline-block" htmlFor="apartment-no">
            Apartment name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="apartment-no"
            name="apartment-no"
            defaultValue={agreements?.data[0].apartment_no}
            className="border w-full p-2 outline-gray-400"
            {...register("apartment_no")}
            placeholder="Enter apartment no "
            readOnly
          />
        </div>
        {/* input 5  */}
        <div className="w-full mt-4">
          <label className="font-bold mb-2 inline-block" htmlFor="rent">
            Rent<span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="rent"
            name="rent"
            defaultValue={agreements?.data[0].rent}
            className="border w-full p-2 outline-gray-400"
            {...register("rent")}
            placeholder="Enter rent "
            readOnly
          />
        </div>
        {/* input 6 */}
        <div className="w-full mt-4 relative">
          <label className="font-bold mb-2 inline-block" htmlFor="month">
            Month<span className="text-red-600">*</span>
          </label>
          <div className="border bg-white w-full p-2 outline-gray-400 flex justify-between items-center">
            <DatePicker
              className="outline-none w-full"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
            <FaRegCaretSquareDown />
          </div>
        </div>

        <Link to={"/dashboard/payment"}>
        <input
          type="submit"
          value={"Pay"}
          className="btn bg-blue-600 text-white font-bold w-full mt-4 rounded-none"
        />
        </Link>
      </form>
    </div>
  );
};

export default MakePayment;
