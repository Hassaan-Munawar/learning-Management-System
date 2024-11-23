import { AdmissionModal } from "@/lib/modals/AdmissionModal";
import { connectDB } from "@/lib/dbConnect";
import { BatchModal } from "@/lib/modals/BatchModal";
import { CourseModal } from "@/lib/modals/CourseModal";
import { ApplicationModal } from "@/lib/modals/ApplicationModal";
import User from "@/lib/modals/userModals";


export async function POST(request) {
  await connectDB();
  const obj = await request.json();
  let newAdmission = new AdmissionModal({ ...obj });
  newAdmission = await newAdmission.save();

  return Response.json({
    error: false,
    msg: "Admission Added Successfully",
    admission: newAdmission,
  });
}

export async function PUT(request) {
  await connectDB();
  const obj = await request.json();
  const { id, status } = obj;

  const updated = await AdmissionModal.findOneAndUpdate(
    { _id: id },
    {
      status: status,
    }
  ).exec();

  return Response.json({
    error: false,
    msg: "Admission Added Successfully",
    admission: updated,
  });
}

export async function GET(req) {
  await connectDB();
  const reqUrl = req.url;
  const { searchParams } = new URL(reqUrl);
  const query = {};
  if (searchParams.get("course")) {
    query.course = searchParams.get("course");
  }
  if (searchParams.get("batch")) {
    query.batch = searchParams.get("batch");
  }
  if (searchParams.get("status")) {
    query.status = searchParams.get("status");
  }

  const admissions = await AdmissionModal.find(query)
    .populate("course", "title description")
    .populate("batch", "title");
  return Response.json({
    error: false,
    msg: "Admission Fetched Successfully",
    admissions,
  });
}
