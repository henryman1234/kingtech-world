import mongoose from "mongoose";
import express from "express"
import { createError } from "../utils/error.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router()

router.post("/", verifyAdmin, async function (req, res, next){
   try {
    const otp = req?.body.otp
    const testAdminPassword = "19670"
    
    if(testAdminPassword !== otp || !req.user.isAdmin) {
        return next(createError(403, "Vous n'etes pas administrateur"))
    }
    res.status(200).json({message: "Bienvenue Admin!"})
   } catch (err) {
    next(err)
   }
})

export default router