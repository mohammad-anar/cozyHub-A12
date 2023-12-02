import axios from "axios";

const useAxiosPublic = () => {
  const axiosPublic = axios.create({
    baseURL: "https://primerentalhub.vercel.app",
  });
  return axiosPublic
};

export default useAxiosPublic;
