import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/axiosSecure";
import { FallingLines } from "react-loader-spinner";

const Announcement = () => {
  const axiosSecure = useAxiosSecure();
  const { data: announcements, isFetching } = useQuery({
    queryKey: ["announcements"],
    queryFn: async () => {
      const res = await axiosSecure.get("/announcements");
      return res;
    },
  });
  console.log(announcements?.data);
  return (
    <>
      {isFetching ? (
        <div className="flex justify-center items-center h-full">
          <FallingLines
            color="#4fa94d"
            width="100"
            visible={true}
            ariaLabel="falling-lines-loading"
          />
        </div>
      ) : (
        <div className="flex flex-col gap-2 my-6 md:my-8">
          <div className="bg-white  p-2 mb-4">
            <h2 className="text-xl font-semibold ml-2">Announcements -</h2>
          </div>
          {announcements?.data?.map((announcement) => (
            <div
              key={announcement._id}
              className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full  flex-row"
            >
              <div className="relative w-1/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-md shrink-0">
                <img
                  src={announcement?.image}
                  alt="card-image"
                  className="object-cover w-full h-full p-4"
                />
              </div>
              <div className="p-6">
                <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  {announcement?.title}
                </h4>
                <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                  {announcement?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Announcement;
