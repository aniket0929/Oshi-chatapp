import {create} from "zustand"
import { axiosInstance } from "../lib/axios.js"
import toast from "react-hot-toast"
import { io } from "socket.io-client";
//
const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5000" : "/";

export const useAuthStore=create((set,get)=>({
    authUser:null,
    isSigningUp:false,
    isLoggingIn:false,
    isUpdatingProfile:false,

    isCheckingAuth:true,

    onlineUsers:[],

    socket:null,

    //to check if user is authenticated     
    checkAuth:async()=>{
        try {
            //send get req to 
            const res= await axiosInstance.get("/auth/check")

            set({authUser:res.data})
                        get().connectSocket();

        } catch (error) {
            console.log("error in checkauth:",error)
            set({authUser:null})
        }finally{
            set({isCheckingAuth:false})
        }
    },

    //signup logic 
    signUp:async(data)=>{
        //set issignup to be true 
        set({isSigningUp:true})
        try {
            const res= await axiosInstance.post("/auth/signup",data)
              //
            set({authUser:res.data})
            toast.success("Account created succesfully ")

            //
            get().connectSocket();
          
        } catch (error) {
            toast.error(error.response.data.message)
        }finally{
            set({isSigningUp:false})
        }
    },

    //login logic

    login:async (data)=>{
        set({isLoggingIn:true})
               
        try {
             const res= await axiosInstance.post("/auth/login",data) 
                    //
            set({authUser:res.data})
            toast.success("Account loggedin succesfully ")   

            //connect socket
            get().connectSocket();
        } catch (error) {
                        toast.error(error.response.data.message)
        }finally{
            set({isLoggingIn:false})
        }
    },

    //logout logic

    logout: async()=>{
        try {
            await axiosInstance.post("auth/logout")
            set({authUser:null})
            toast.success("Logged out succesfully ")
            //cll disconnect socket
            get().disconnectSocket()
        } catch (error) {
            toast.error(error.response.data.message)

        }
    },

    //update profile 
   updateProfile: async (data) => {
    set({ isUpdatingProfile: true });
    try {
      const res = await axiosInstance.put("/auth/update-profile", data);
      set({ authUser: res.data });
      toast.success("Profile updated successfully");
    } catch (error) {
      console.log("error in update profile:", error);
      toast.error(error.response.data.message);
    } finally {
      set({ isUpdatingProfile: false });
    }
  },

  //connect socket 
  connectSocket: () => {
    const { authUser } = get();
    if (!authUser || get().socket?.connected) return;

    const socket = io(BASE_URL, {
      query: {
        userId: authUser._id,
      },
    });
    socket.connect();

    set({ socket: socket });

    socket.on("getOnlineUsers", (userIds) => {
      set({ onlineUsers: userIds });
    });
  },

  //disconnect sockey
   disconnectSocket:()=>{
     if (get().socket?.connected) get().socket.disconnect();
  },
}))