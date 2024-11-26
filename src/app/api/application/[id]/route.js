import { connectDB } from "@/lib/dbConnect";
import { AdmissionModal } from "@/lib/modals/AdmissionModal";
import { ApplicationModal } from "@/lib/modals/ApplicationModal";
import { BatchModal } from "@/lib/modals/BatchModal";
import { CourseModal } from "@/lib/modals/CourseModal";
import { UserModal } from "@/lib/modals/UserModal";

export async function GET(req,{params}) {
    const id = params.id
    await connectDB();
    
      let userApplications = await ApplicationModal.find({user:id})
        .populate("course", "title")
        .populate("batch", "title trainer")
        .populate("admission", "startDate endDate status")
        .populate("user", "name email image")
      return Response.json({
        error: false,
        msg: "User Applications Fetched Successfully",
        userApplications,
      });
  }