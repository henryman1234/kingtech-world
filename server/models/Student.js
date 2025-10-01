import mongoose from "mongoose"
import { string } from "zod"

const StudentSchema = new mongoose.Schema ({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    matricule: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    isDelegate: {
        type: Boolean,
        default: false
    }
}, {timestamps: true})

const Student = mongoose.model("Student", StudentSchema)
export default Student