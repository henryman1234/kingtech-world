import express from "express"
import { verifyToken, verifyUser } from "../utils/verifyToken.js"
import nodemailer from "nodemailer"
import { createError } from "../utils/error.js"

const router = express.Router()

router.post("/", verifyToken, async function (req, res, next) {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "henrynomo68@gmail.com",
                pass: "Murielle12345?!"
            }
        })

        const mailOptions = {
            from: "henrynomo68@gmal.com"
        }

        transporter.sendMail(mailOptions, function (err, info){
            if (err) {
                return createError(404, "Something went wrong")
            } else {
                console.log("Email envoyé" + info.response)
                res.status(200).json({message:"success", data: info.response})
            }
        })
    } catch (err) {
        next(err)
    }
} )

export default router