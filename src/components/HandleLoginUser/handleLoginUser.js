import { connectDB } from "@/lib/dbConnect";
import { UserModal } from "@/lib/modals/UserModal";
export default async function handleLoginUser(profile) {
  await connectDB(); 
  let user = await UserModal.findOne({ email: profile.email });
  if (!user) {
    user = new UserModal({
      name: profile.name,
      email: profile.email,
      image: profile.picture,
    });
    await user.save();
  }
  return user;
}
