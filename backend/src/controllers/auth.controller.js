import cloudinary from "../lib/cloudinary.js"
import { generateToken } from "../lib/utils.js"
import User from "../models/user.model.js"
import bcrypt from "bcryptjs"

//signup routing 
export const signup=async (req,res)=>{

    //fetch data that useer sends 
    const {fullName,email,password}=req.body
    try {

        if(!fullName || !email || !password){
            return res.status(400).json({message:"all fields are required"})

        }
        

        if(password.length<6){
            return res.status(400).json({message:"password must be atleast 6 characters"})
        }

        //find if user exists
        const user= await User.findOne({email})

        //if user exists  
        if(user){
            return res.status(400).json({message:"Email already exists"})
        }

        //hash the password
        const salt= await bcrypt.genSalt(10)

        const hashedPassword= await bcrypt.hash(password,salt)

        //new user 
        const newUser=new User({
            fullName:fullName,
            email:email,
            password:hashedPassword,
        })

        //if we have new user
        if(newUser){
            //generate jwt token 
            generateToken(newUser._id,res)

            //save new user afteer generating jwt token 
            await newUser.save()

            //
            res.status(201).json({
                _id:newUser._id,
                fullName:newUser.fullName,
                email:newUser.email,
                profilePic:newUser.profilePic,
            })
        }else{
            return res.status(400).json({message:"Invalid user data"});
        }
        
    } catch (error) {
        console.log("error in signup controller",error.message)

        res.status(500).json({message:"internal server error "})

    }
}

//login routing
export const login=async (req,res)=>{
    const {email,password}=req.body;
    try {
        const user= await User.findOne({email})

        if(!user){
            return res.status(400).json({message:"Invalid credentials"})
        }

        const isPasswordCorrect= await bcrypt.compare(password,user.password)

        if(!isPasswordCorrect){
            return res.status(400).json({message:"Invalid credentials"}) 
        }
        //
        generateToken(user._id,res)

         res.status(200).json({
            _id:user._id,
            fullName:user.fullName,
            email:user.email,
            profilePic:user.profilePic,
         }) 


    } catch (error) {
        console.log("error in login controller",error.message)
        return res.status(500).json({message:"Internal servr error"}) 
    }
}

//logout routing
export const logout=(req,res)=>{
    try {
        res.cookie("jwt","",{maxAge:0})

        return res.status(200).json({message:"Logged out succesfully"}) 

    } catch (error) {
        console.log("error in logout controller",error.message)
        return res.status(500).json({message:"Internal servr error"}) 
    }
}

//update profile 
export const updateProfile=async (req,res)=>{
    try {
        const {profilePic}=req.body
        const userId=req.user._id

        //if not proffile pic 
        if(!profilePic){
            return res.status(400).json({message:"Profile pic required "}) 
        }
        const uploadResponse= await cloudinary.uploader.upload(profilePic)
        const updatedUser=await User.findByIdAndUpdate(userId,{profilePic:uploadResponse.secure_url},{new:true})

        res.status(200).json(updatedUser)

    } catch (error) {
        console.log("error in update profile:",error)
    }
}

//
export const checkAuth = (req,res) => {
    try {
        res.status(200).json(req.user);
    } catch (error) {
        console.log("error in checkauth controller:", error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
}
