import mongoose, { models, Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }

}, { timestamps: true })

const User = models.users || mongoose.model("users", userSchema) 

export default User;