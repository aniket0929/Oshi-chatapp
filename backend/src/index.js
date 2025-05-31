import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.routes.js"
import { connectDB } from "./lib/db.js"
import cookieParser from "cookie-parser"
dotenv.config()
const app= express()



//allows us to extract json data out of body; this should be written before the auth routes 
app.use(express.json());
app.use(cookieParser())


//authentication routes 
app.use("/api/auth", authRoutes)

//message routes
app.use("/api/message",messageRoutes)


const PORT= process.env.PORT;

app.listen(PORT, ()=>{
    console.log("server is running")
    connectDB()
})