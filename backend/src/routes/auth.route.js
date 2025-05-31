import express from "express";
import { checkAuth, login, logout, signup, updateProfile } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router= express.Router()

//route for signup
router.post("/signup",signup)

//route for login 
router.post("/login",login)

//route for logout
router.post("/logout",logout)

//route for update-profile 
router.put("/update-profile",protectRoute ,updateProfile)

//
router.get("/check",protectRoute,checkAuth)

export default router
