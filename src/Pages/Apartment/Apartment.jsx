// import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic/axiosPublic";
import { useQuery } from "@tanstack/react-query";
import { BeatLoader } from "react-spinners";
import ApartmentCard from "./ApartmentCard";
import { Helmet } from "react-helmet-async";

// import axios from "axios";
// import axiosPublic from "../../Hooks/useAxiosPublic/axiosPublic";
// import axios from "axios";

const Apartment = () => {
  const axiosPublic = useAxiosPublic();

  const { data: apartments, isLoading } = useQuery({
    queryKey: ["apartments"],
    queryFn: async () => {
      const res = await axiosPublic.get("/apartments");
      return res;
    },
  });

  return (
    <>
    <Helmet>
        <title>CozyHub || Apartments</title>
      </Helmet>
      <div>
        <h2 className="text-xl text-blue-500 font-semibold my-4 text-center">Apartments</h2>
      </div>
      {isLoading ? (
        <div className="min-h-screen flex items-center justify-center">
          <BeatLoader color="blue" />
        </div>
      ) : (
        <div className="my-12 mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4  mx-auto">
          {apartments?.data?.map((apartment) => (
            <ApartmentCard
              key={apartment._id}
              apartment={apartment}
            ></ApartmentCard>
          ))}
        </div>
      )}
    </>
  );
};

export default Apartment;
