import { connectDB } from "@/lib/dbConnect";
import { AdmissionModal } from "@/lib/modals/AdmissionModal";
import { ApplicationModal } from "@/lib/modals/ApplicationModal";
import { BatchModal } from "@/lib/modals/BatchModal";
import { CourseModal } from "@/lib/modals/CourseModal";
import User from "@/lib/modals/userModals";

export async function POST(request) {
  await connectDB();
  const obj = await request.json();
  let newCourse = new CourseModal({ ...obj });
  newCourse = await newCourse.save();

  return Response.json({
    error: false,
    msg: "Course Added Successfully",
    course: newCourse,
  });
}

export async function GET() {
  await connectDB();

  const courses = await CourseModal.find();
  return Response.json({
    error: false,
    msg: "Course Fetched Successfully",
    courses: courses,
  });
}
