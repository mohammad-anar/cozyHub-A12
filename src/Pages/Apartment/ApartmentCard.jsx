// import PropTypes from "prop-types";
import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContex } from "../SignUp/AuthProvider/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure/axiosSecure";
import toast from "react-hot-toast";
const ApartmentCard = ({ apartment }) => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContex);
  const handleAgreement = () => {
    const userName = user?.displayName;
    const userEmail = user?.email;

    const aggreementData = {
      userName,
      userEmail,
      floor_no: apartment.floor_no,
      block_name: apartment.block_name,
      apartment_no: apartment.apartment_no,
      rent: apartment.rent,
      status: "pending",
      createdAt : new Date("2023-11-29").toUTCString()
    };
    axiosSecure
      .post("/agreements", aggreementData)
      .then((res) => {
        if (res?.data?.insertedId) {
          toast.success("apartment is agreemented");
        }
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 ">
      <div className="relative m-0 h-40 max-h-40 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
        <img
          src={apartment.image}
          className="object-cover h-full w-full"
          alt="ui/ux review check"
        />
      </div>
      <div className="p-6 px-1">
        <h4 className="block font-sans text-lg antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          Block name:
          <span className="text-lg font-normal">{apartment.block_name}</span>
        </h4>
        <h4 className="block mt-2 font-sans text-base font-medium antialiased leading-relaxed text-gray-700">
          Floor no:
          <span className="font-normal"> {apartment.floor_no}</span>
        </h4>
        <h4 className="block font-sans text-base font-medium antialiased leading-relaxed text-gray-700">
          Apartment no:
          <span className="font-normal"> {apartment.apartment_no}</span>
        </h4>
        <h4 className="block font-sans text-base font-medium antialiased leading-relaxed text-gray-700">
          Rent:
          <span className="font-normal"> $ {apartment.rent}</span>
        </h4>
      </div>
      <button
        onClick={handleAgreement}
        className="w-full bg-blue-600 text-white py-2 hover:bg-blue-300 duration-200 btn rounded-none"
      >
        Aggrement
      </button>
    </div>
  );
};
ApartmentCard.propTypes = {
  apartment: PropTypes.object,
};

export default ApartmentCard;
