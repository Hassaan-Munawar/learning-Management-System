import mongoose from "mongoose";

const { Schema } = mongoose;

const trainerSchema = new Schema(
    {
        name: String,
        email: String,
        qualification: String
    },
    { timestamps: true }
);

export const TrainerModal =
    mongoose.models.Trainer || mongoose.model("Trainer", trainerSchema);