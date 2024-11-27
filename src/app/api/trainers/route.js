import { connectDB } from "@/lib/dbConnect";
import { AdmissionModal } from "@/lib/modals/AdmissionModal";
import { ApplicationModal } from "@/lib/modals/ApplicationModal";
import { BatchModal } from "@/lib/modals/BatchModal";
import { CourseModal } from "@/lib/modals/CourseModal";
import { TrainerModal } from "@/lib/modals/TrainerModal";
import { UserModal } from "@/lib/modals/UserModal";

export async function GET() {
    await connectDB();
    const trainers = await TrainerModal.find();
    return Response.json({
      error: false,
      msg: "Trainers Fetched Successfully",
      trainers: trainers,
    });
  }

  export async function POST(request) {
    await connectDB();
    const obj = await request.json();
    let newTrainer = new TrainerModal({ ...obj });
    newTrainer = await newTrainer.save();
  
    return Response.json({
      error: false,
      msg: "Trainer Added Successfully",
      Trainer: newTrainer,
    });
  }