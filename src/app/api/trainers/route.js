import { connectDB } from "@/lib/dbConnect";
import { TrainerModal } from "@/lib/modals/TrainerModal";

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