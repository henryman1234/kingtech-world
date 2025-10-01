import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import { createError } from "./error.js";
import dotenv from "dotenv"
dotenv.config()

export const verifyToken = async function (req, res, next) {
    try {
        const token = req?.cookies?.access_token
        if (!token) {
            return next(createError(403, "You are not authenticated"))
        } 
        jwt.verify(token, process.env.JWT_SECRET, function(err, user){
            if (err) {
                return next(createError(400, "Token is not valid!"))
            }
            req.user = user
            next()
        })
    } catch (err) {
        next(err)
    }
}

export const verifyUser = async function (req, res, next) {
    try {
        verifyToken(req, res, function(){
            if ( req?.params?.id === req?.user?.id || req?.user?.isAdmin) {
                return next()
            } else {
                return next(createError(402, "You are not authorized!"))
            }
        })
    } catch (err) {
        next(err)
    }
}

export const verifyAdmin = async function (req, res, next) {
    try {
        verifyToken(req, res, function () {

            if (req.user?.isAdmin) {
                return next()
            } else {
                return next(createError(403, "You are not Admin!"))
            }
        })
    } catch (err) {
        next(err)
    }
}