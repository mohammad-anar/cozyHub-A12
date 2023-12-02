import { FaRegUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { GrAnnounce } from "react-icons/gr";
import { useContext } from "react";
import { AuthContex } from "../SignUp/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { MdManageHistory, MdOutlinePayment } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { TfiAnnouncement } from "react-icons/tfi";
import { PiGitPullRequestThin } from "react-icons/pi";
import { SiGoogletagmanager } from "react-icons/si";
import Logo from "../../Components/Sidebar/Logo/Logo";
import useAxiosSecure from "../../Hooks/useAxiosSecure/useAxionSecure";
import { FallingLines } from "react-loader-spinner";

const Sidebar = () => {
  const { user } = useContext(AuthContex);
  const axiosSecure = useAxiosSecure();
  const { data: loggedUser, isLoading } = useQuery({
    queryKey: ["users", user],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user?.email}`);
      return res;
    },
  });

  return (
    <>
      {isLoading ? (
        <FallingLines
          color="#00ff"
          width="100"
          visible={true}
          ariaLabel="falling-lines-loading"
        />
      ) : (
        <>
          {" "}
          <div className="btn rounded-none h-full ">
            <NavLink
              to={"/"}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " text-blue-600 w-full p-2 "
                  : "w-full p-2 h-full"
              }
            >
              <div className="flex items-center justify-start bg-white gap-3 w-full">
                <Logo></Logo>
              </div>
            </NavLink>
          </div>
          <div className="btn bg-white rounded-none ">
            <NavLink
              to={"/dashboard"}
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
                <h2>
                  {loggedUser?.data[0]?.role === "admin"
                    ? "Admin Profile"
                    : "My Profile"}
                </h2>
              </div>
            </NavLink>
          </div>
          {loggedUser?.data[0]?.role !== "admin" ? (
            <>
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

              <div className="btn bg-white rounded-none ">
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
              <div className="btn bg-white rounded-none ">
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
              <div className="btn bg-white rounded-none ">
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
              <div className="btn bg-white rounded-none ">
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
      )}
    </>
  );
};

export default Sidebar;
