import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcryptjs"
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import User from "../models/User.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
dotenv.config()

const router = express.Router()

router.post("/register", async function (req, res, next) {
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(req.body.password, salt)
    try {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            training: req.body.training

        })
        const savedUser = await newUser.save()
        res.status(201).json({ message: "succès", data: savedUser })
    } catch (err) {
        next(err)
    }
})

router.post("/login", async function (req, res, next) {
    try {
        const user = await User.findOne({ username: req.body.username })
        if (!user) {
            return next(createError(404, "Cet utilisateur n'existe pas"))
        }
        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
        if (!isPasswordCorrect) {
            return next(createError(400, "Mot de passe inavalide!"))
        }

        const {password, isAdmin, ...othersUserDetails} = user._doc

        const token = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.JWT_SECRET)
        
        res.cookie("access_token", token, {
            httpOnly: true,
            maxAge: new Date(Date.now() + 999999999999)
        }).status(200).json({...othersUserDetails})
    } catch (err) {
        next(err)
    }
})

router.post("/logout", async function (req, res, next) {
    try {
        res.clearCookie("access_token").status(200).json({message: "Logout successfully"})
    } catch (err) {
        next(err)
    }
})




export default router