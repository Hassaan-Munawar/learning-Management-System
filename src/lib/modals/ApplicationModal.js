import mongoose from "mongoose";

const { Schema } = mongoose;

const applicationSchema = new Schema(
  {
    course: { type: mongoose.Types.ObjectId, ref: "Course" },
    batch: { type: mongoose.Types.ObjectId, ref: "Batch" },
    admission: { type: mongoose.Types.ObjectId, ref: "Admission" },
    user: { type: mongoose.Types.ObjectId, ref: "Users" },
    info: {
      CNIC: String,
      DOB: String,
      address: String,
    },
    status: {
      type: String,
      default: "pending",
      enum: ["pending", "enrolled", "rejected"],
    },
  },
  { timestamps: true }
);

export const ApplicationModal =
  mongoose.models.Application || mongoose.model("Application", applicationSchema);
