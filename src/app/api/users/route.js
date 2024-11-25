import { connectDB } from "@/lib/dbConnect";
import { UserModal } from "@/lib/modals/UserModal";

export async function GET() {
    await connectDB();
  
    const users = await UserModal.find();
    return Response.json({
      error: false,
      msg: "Course Fetched Successfully",
      users: users,
    });
  }