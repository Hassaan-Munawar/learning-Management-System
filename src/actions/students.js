// "use server";

import { connectDB } from "@/lib/dbConnect";
import { UserModal } from "@/lib/modals/UserModal";


export async function getStudents() {
    // let users = await fetch(`${process.env.BASE_URL}/api/students`,{cache:"no-cache"});
    // users = await users.json();
    await connectDB();
  const users = await UserModal.find();
    return users;
}