import axios from "axios";
import toast from "react-hot-toast";


const axiosInstance=axios.create({})

axiosInstance.interceptors.request.use( 
(config) => {
// Do something before request is sent
config.headers.Authorization="Bearer token"
toast.success("Welcome !")
return config;
}, 
(error)=>{
console.log(error)
});
62
// Add a response interceptor
axiosInstance.interceptors.response.use(
(response)=> {
// Any status code that lie within the range of 2xx cause this 
// Do something with response data
toast.success("operation success")
return response;
},
(error)=>{
console.log(error)
});
export default axiosInstance;