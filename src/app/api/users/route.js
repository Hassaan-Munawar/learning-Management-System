import { connectDB } from "@/lib/dbConnect";
import { AdmissionModal } from "@/lib/modals/AdmissionModal";
import { ApplicationModal } from "@/lib/modals/ApplicationModal";
import { BatchModal } from "@/lib/modals/BatchModal";
import { CourseModal } from "@/lib/modals/CourseModal";
import { UserModal } from "@/lib/modals/UserModal";

export async function GET() {
  await connectDB();
  const users = await UserModal.find();
  return Response.json({
    error: false,
    msg: "Users Fetched Successfully",
    users: users,
  });
}