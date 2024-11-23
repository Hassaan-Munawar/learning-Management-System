import mongoose from "mongoose";

const { Schema } = mongoose;

const courseSchema = new Schema(
  {
    title: { type: String, unique: true },
    description: String,
    duration: String,
    eligibility: [String],
    thumbnail: String,
  },
  { timestamps: true }
);

export const CourseModal =
  mongoose.models.Course || mongoose.model("Course", courseSchema);
