import mongoose, { Schema } from "mongoose";

const UserSchema =  new Schema({
    username: {
        type: String,
        max: 10,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    training: {
        type: String,
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