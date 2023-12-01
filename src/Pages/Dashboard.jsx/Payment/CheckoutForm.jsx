import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/axiosSecure";
import { useEffect, useState } from "react";
import PropTypes from "prop-types"

const CheckoutForm = ({ price }) => {
    const [secret, setSecret] = useState("");
    console.log(secret);
  const [error, setError] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    price &&
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
          const secret = res?.data?.clientSecret;
        setSecret(secret)
      });
  }, [price]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    // create payment method
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[paymentMethod]", paymentMethod);
      setError("");
    }
  };
  return (
    <div className="max-w-[500px] mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="border p-2 bg-white">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "9e2146",
                },
              },
            }}
          />
        </div>
        <p className="text-xs text-red-600 mt-2">{error}</p>
        <button
          className="btn btn-md text-lg text-white mt-4 block mx-auto px-6 bg-blue-500 rounded-xl"
          type="submit"
          disabled={!stripe || !secret}
        >
          Pay
        </button>
      </form>
    </div>
  );
};
CheckoutForm.propTypes={
    price: PropTypes.number,
}
export default CheckoutForm;
