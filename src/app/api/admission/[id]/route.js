
import { connectDB } from "@/lib/dbConnect";
import { AdmissionModal } from "@/lib/modals/AdmissionModal";
import { ApplicationModal } from "@/lib/modals/ApplicationModal";
import { BatchModal } from "@/lib/modals/BatchModal";
import { CourseModal } from "@/lib/modals/CourseModal";
import User from "@/lib/modals/userModals";


export async function GET(req,{ params }) {
  const id = params.id;
  await connectDB();
  const admissions = await AdmissionModal.findOne({ _id: id })
    .populate("course", "title description")
    .populate("batch", "title")
    .lean();

  const applications = await ApplicationModal.find({
    admission: id,
  }).populate("user", "name email image");

  return Response.json({
    error: false,
    msg: "Admission Fetched Successfully",
    admission: {
      ...admissions,
      applications,
    },
  });
}
