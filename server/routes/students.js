import mongoose from "mongoose";
import express from "express"
import { deleteStudent, getStudent, getStudents, updateStudent } from "../controllers/students.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router()

router.get("/checkauthentication", verifyToken, async function(req, res, next){
    res.send("Hello random user, you are logged in")
})

router.get("/", getStudents)
router.get("/:id", verifyUser, getStudent )
router.put("/:id", verifyUser, updateStudent )
router.delete("/:id",verifyAdmin, deleteStudent )

export default router