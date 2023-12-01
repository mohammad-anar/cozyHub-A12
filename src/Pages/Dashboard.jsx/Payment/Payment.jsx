import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/axiosSecure";
import { useContext } from "react";
import { AuthContex } from "../../SignUp/AuthProvider/AuthProvider";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
const Payment = () => {
  const { user } = useContext(AuthContex);
  const axiosSecure = useAxiosSecure();
  const { data: agreements } = useQuery({
    queryKey: ["agreements", user],
    queryFn: async () => {
      const res = await axiosSecure.get(`/agreements?email=${user?.email}`);
      return res;
    },
  });
  return (
    <div className="m-4 p-6">
      <div className="px-12 flex flex-col items-center justify-center">
        <form className="flex flex-col items-center px-16 w-[320px] md:w-[450px] lg:w-[520px] mx-auto">
          <h2 className="my-4 mt-4 text-blue-600 text-3xl font-medium">
            Payment
          </h2>
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
              placeholder="Enter your email "
            />
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
              placeholder="Enter your password "
            />
          </div>
        </form>
      </div>
      <div className="px-16 mt-6 w-[320px] md:w-[450px] lg:w-[520px] mx-auto">
        <Elements stripe={stripePromise}>
          <CheckoutForm price={agreements?.data[0]?.rent}></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
