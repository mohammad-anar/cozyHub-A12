import { FaRegUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { GrAnnounce } from "react-icons/gr";
import { useContext } from "react";
import { AuthContex } from "../SignUp/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic/axiosPublic";
import { MdManageHistory, MdOutlinePayment } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { TfiAnnouncement } from "react-icons/tfi";
import { PiGitPullRequestThin } from "react-icons/pi";
import { SiGoogletagmanager } from "react-icons/si";


const Sidebar = () => {
  const { user } = useContext(AuthContex);
  const axiosPublic = useAxiosPublic();

  // useEffect(() => {
  //   fetch( `http://localhost:5000/users/${user?.email}`)
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  // },[user])
  // console.log(user);
  const { data: loggedUser } = useQuery({
    queryKey: ["users", user],
    queryFn: async () => {
      const res = await axiosPublic.get(`/users/${user?.email}`);
      return res;
    },
  });

  return (
    <>
      {loggedUser?.data[0]?.role !== "admin" ? (
        <>
          {" "}
          <div  className="btn bg-white rounded-none ">
            <NavLink
              to={"my-profile"}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " text-blue-600 w-full p-2 "
                  : "w-full p-2"
              }
            >
              <div className="flex items-center justify-start gap-3 w-full">
                <FaRegUserCircle size={22} />
                <h2>My Profile</h2>
              </div>
            </NavLink>
          </div>
          {/* user routes */}
          {loggedUser?.data[0]?.role === "user" && (
            <div title="Apartment" className=" btn bg-white rounded-none">
              <NavLink
                to={"announcements"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? " text-blue-600 w-full p-2 "
                    : "w-full p-2"
                }
              >
                <div className="flex items-center justify-start gap-3 w-full">
                  <GrAnnounce size={22} />
                  <h2>Announcements</h2>
                </div>
              </NavLink>
            </div>
          )}
          {/* member links */}
          {loggedUser?.data[0]?.role === "member" && (
            <>
              <div title="Apartment" className=" btn bg-white rounded-none">
                <NavLink
                  to={"makepayment"}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? " text-blue-600 w-full p-2 "
                      : "w-full p-2"
                  }
                >
                  <div className="flex items-center justify-start gap-3 w-full">
                    <MdOutlinePayment size={22} />
                    <h2>Make Payment</h2>
                  </div>
                </NavLink>
              </div>
              <div title="Apartment" className="btn bg-white rounded-none">
                <NavLink
                  to={"payment-history"}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? " text-blue-600 w-full p-2 "
                      : "w-full p-2"
                  }
                >
                  <div className="flex items-center justify-start gap-3 w-full">
                    <MdManageHistory size={22} />
                    <h2>Payment History</h2>
                  </div>
                </NavLink>
              </div>
              <div title="Apartment" className=" btn bg-white rounded-none">
                <NavLink
                  to={"announcements"}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? " text-blue-600 w-full p-2 "
                      : "w-full p-2"
                  }
                >
                  <div className="flex items-center justify-start gap-3 w-full">
                    <GrAnnounce size={22} />
                    <h2>Announcement</h2>
                  </div>
                </NavLink>
              </div>
            </>
          )}
        </>
      ) : (
        <>
          {/* admin routes  */}
          <div  className="btn bg-white rounded-none ">
            <NavLink
              to={"admin-profile"}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " text-blue-600 w-full p-2 "
                  : "w-full p-2"
              }
            >
              <div className="flex items-center justify-start gap-3 w-full">
                <FaRegUserCircle size={22} />
                <h2>Admin Profile</h2>
              </div>
            </NavLink>
          </div>
          <div  className="btn bg-white rounded-none ">
            <NavLink
              to={"manage-members"}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " text-blue-600 w-full p-2 "
                  : "w-full p-2"
              }
            >
              <div className="flex items-center justify-start gap-3 w-full">
                <MdManageAccounts size={22} />
                <h2>Manage members</h2>
              </div>
            </NavLink>
          </div>
          <div  className="btn bg-white rounded-none ">
            <NavLink
              to={"make-announcement"}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " text-blue-600 w-full p-2 "
                  : "w-full p-2"
              }
            >
              <div className="flex items-center justify-start gap-3 w-full">
                <TfiAnnouncement size={22} />
                <h2>Make Announcement</h2>
              </div>
            </NavLink>
          </div>
          <div  className="btn bg-white rounded-none ">
            <NavLink
              to={"agreement-requests"}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " text-blue-600 w-full p-2 "
                  : "w-full p-2"
              }
            >
              <div className="flex items-center justify-start gap-3 w-full">
                <PiGitPullRequestThin size={22} />
                <h2>Agreement Requests</h2>
              </div>
            </NavLink>
          </div>
          <div  className="btn bg-white rounded-none ">
            <NavLink
              to={"manage-cupons"}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " text-blue-600 w-full p-2 "
                  : "w-full p-2"
              }
            >
              <div className="flex items-center justify-start gap-3 w-full">
                <SiGoogletagmanager size={22} />
                <h2>Manage Cupons</h2>
              </div>
            </NavLink>
          </div>
        </>
      )}
    </>
  );
};

export default Sidebar;
