import { connectDB } from "@/lib/dbConnect";
import { UserModal } from "@/lib/modals/UserModal";

export async function GET(req) {
  await connectDB();

  const users = await UserModal.find();
  return Response.json({
    error: false,
    msg: "Users Fetched Successfully",
    users: users,
  });
}