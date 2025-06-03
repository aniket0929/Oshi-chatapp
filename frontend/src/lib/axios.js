import axios from "axios"

export const axiosInstance=axios.create({
    baseURL:"http://localhost:5000/api",
    //send cookies with every single req
    withCredentials:true,
})