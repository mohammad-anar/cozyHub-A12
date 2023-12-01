import { useContext } from "react";
import { AuthContex } from "../Pages/SignUp/AuthProvider/AuthProvider";
import PropTypes from "prop-types";
import { FallingLines } from "react-loader-spinner";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContex);

  if (loading) {
    return <div className="flex justify-center items-center h-screen text-blue-600">
        <FallingLines
      color="#4834d4"
      width="100"
      visible={true}
      ariaLabel="falling-lines-loading"
    />
    </div>
  }

  if (user === null) {
    return <Navigate to={"/login"}></Navigate>;
  }

  return children;
};
PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
