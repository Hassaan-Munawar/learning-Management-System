import mongoose from "mongoose";
const { Schema } = mongoose;
const userSchema = new Schema(
    {
        name: String,
        email: String,
        image: String

    }, { timestamps: true }
)

export const UserModal =
    mongoose.models.User || mongoose.model("User", userSchema);

