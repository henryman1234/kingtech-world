import mongoose, { Schema } from "mongoose";

const UserSchema =  new Schema({
    username: {
        type: String,
        unique: true,
        max: 10,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    training: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false
    }

}, {timestamps: true})

const User = new mongoose.model("User", UserSchema)
export default User