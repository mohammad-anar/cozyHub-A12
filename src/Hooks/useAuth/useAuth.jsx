import { useContext } from "react";
import { AuthContex } from "../../Pages/SignUp/AuthProvider/AuthProvider";

const useAuth = () => {
    const contexValue = useContext(AuthContex);
    return contexValue;
};

export default useAuth;