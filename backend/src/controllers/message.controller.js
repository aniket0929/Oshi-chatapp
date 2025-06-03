import Message from "../models/message.model.js"
import User from "../models/user.model.js";

    import cloudinary from "../lib/cloudinary.js";

export const getUsersForSidebar = async (req,res)=>{
    try {
        //
        const loggedInUserId=req.user._id;
        const filteredUsers= await User.find({_id:{$ne:loggedInUserId}}).select("-password")

        res.status(200).json(filteredUsers)
    } catch (error) {
        console.log("Error in gettingUsersForSideBar:",error.message)
        res.status(500).json({error:"internal server error"})
    }
}

export const getMessages=async(req,res)=>{
    try {
        const{id:userToChatId}=req.params
        const myId=req.user._id

        //
        const messages= await Message.find({
             $or:[
                {senderId:myId, receiverId:userToChatId},
                {senderId:userToChatId, receiverId:myId}
             ]
        })
        res.status(200).json(messages)

    } catch (error) {
        console.log("Error in getMessagescontrolleer:",error.message)
        res.status(500).json({error:"internal server error"})
    }
}

export const sendMessage=async(req,res)=>{
    try {
        //
        const {text,img}=req.body
        const{id:receiverId}=req.params
        const senderId=req.user._id

        let imgUrl;

        if(img){
            //upload to cloudinary

            const uploadResponse=await cloudinary.uploader.upload(img)
            imgUrl=uploadResponse.secure_url
        }

        //
        const newMessage=new Message({
            senderId,
            receiverId,
            text,
            img:imgUrl
        })

        await newMessage.save()

       // todo:add a real time functionality
       res.status(201).json(newMessage)
    } catch (error) {
        console.log("Error in sendMessage controller:",error.message)
        res.status(500).json({error:"internal server error"})
    }
}