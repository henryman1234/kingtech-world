import express from "express"
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/users.js"
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js"

const router = express.Router()

router.get("/", verifyAdmin,  getUsers)
router.get("/:id", verifyUser, getUser)
router.put("/:id", verifyUser, updateUser)
router.delete("/:id", verifyAdmin, deleteUser )

export default router