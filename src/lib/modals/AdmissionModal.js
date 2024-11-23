import mongoose from "mongoose";

const { Schema } = mongoose;

const admissionSchema = new Schema(
  {
    course: { type: mongoose.Types.ObjectId, ref: "Course" },
    batch: { type: mongoose.Types.ObjectId, ref: "Batch" },
    startDate: { type: String },
    endDate: { type: String },
    status: {
      type: String,
      default: "pending",
      enum: ["pending", "open", "close"],
    },
  },
  { timestamps: true }
);
if (mongoose.models.Admission) {
  mongoose.models.Admission.schema = admissionSchema;
}

export const AdmissionModal =
  mongoose.models.Admission || mongoose.model("Admission", admissionSchema);
