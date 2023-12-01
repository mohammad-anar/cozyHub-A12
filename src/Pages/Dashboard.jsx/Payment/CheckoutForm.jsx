import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/axiosSecure";
import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types"
import { AuthContex } from "../../SignUp/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const CheckoutForm = ({ price , agreement, paymentMonth}) => {
    const [secret, setSecret] = useState("");
    console.log(secret);
  const [error, setError] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const {user} = useContext(AuthContex)

  useEffect(() => {
    price &&
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
          const secret = res?.data?.clientSecret;
        setSecret(secret)
      });
  }, [price]);
//   form sumbit handler 
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
    const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(secret,{
        payment_method:{
            card:card,
            billing_details: {
                name:user?.displayName || "anonimous",
                email: user?.email || "anonimous",
            }
        }
    })
    if(confirmError){
        console.log("error", confirmError);
        toast.error(confirmError.message)
    }else{
        console.log("paymentIntent", paymentIntent);
        if(paymentIntent.status === "succeeded"){
            toast.success("payment success")
            const payment = {
                name: user.displayName,
                email:user.email,
                apartment_no:agreement?.apartment_no,
                block_name: agreement?.block_name,
                floor_no: agreement?.floor_no,
                createdAt: agreement?.createdAt,
                rent:price,
                pay_month:paymentMonth,
                payment_date: new Date().toUTCString(),
            }
            axiosSecure.post("/payments",payment)
            .then(res => {
                console.log(res.data);
            }).catch(err => {
                console.log(err);
            })
        }
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
    agreement:PropTypes.object,
    paymentMonth:PropTypes.string,
}
export default CheckoutForm;
