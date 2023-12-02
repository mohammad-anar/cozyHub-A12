import toast from "react-hot-toast";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxionSecure";

const MakeAnnouncement = () => {
  const axiosSecure = useAxiosSecure();
  const handleAnnouncement = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const image = "https://cdn-icons-png.flaticon.com/512/5875/5875271.png";
    const announcement = { title, description, image };
    axiosSecure
      .post("/announcements", announcement)
      .then((res) => {
        console.log(res.data);
        toast.success("annonucement saved to db 🔥");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="my-12">
      <div className=" w-3/4 mx-auto ">
        <form
          onSubmit={handleAnnouncement}
          className="py-20 pt-8 shadow-xl bg-gray-50 p-10 rounded-xl"
        >
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-semibold text-blue-500">Make Announcements</h2>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="title"
              className="text-base font-medium mb-2 outline-none"
            >
              Title <span className="text-red-600">*</span>
            </label>
            <input
              id="title"
              type="text"
              name="title"
              className="p-2 outline-none border"
              required
            />
          </div>
          <div className="flex flex-col mt-2">
            <label
              htmlFor="description"
              className="text-base font-medium mb-2 outline-none"
            >
              Description <span className="text-red-600">*</span>
            </label>
            <textarea
              name="description"
              className="resize-none outline-none p-2 border"
              id="description"
              rows="5"
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="btn w-full mt-4 bg-blue-500 text-white"
            >
              Make Announcement
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MakeAnnouncement;
