import axios from "axios";
const axiosSecure = axios.create({
    baseURL:"http://localhost:5000",

})

const useAxiosSecure = () => {
    //request confit
     axiosSecure.interceptors.request.use((config) => {
        //set token to req config header
        const token = localStorage.getItem("token");
        config.headers.authorization = `Bearer ${token}`

        return config
     }, (error) => {
        return Promise.reject(error)
     });

     //response config
     axiosSecure.interceptors.response.use((response) => {
        return response;
     }, async (error) => {
        const status = error.response.status;
        if (status === 401 || status === 403) {
            console.log(error);
        }
        return error;
     })

    
    return axiosSecure
};

export default useAxiosSecure;