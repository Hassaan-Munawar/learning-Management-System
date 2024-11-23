import { connectDB } from "@/lib/dbConnect";
import User from "@/lib/modals/userModals";

export default async function handleLoginUser(profile) {
  await connectDB(); 
  let user = await User.findOne({ email: profile.email });
  if (!user) {
    user = new User({
      name: profile.name,
      email: profile.email,
      image: profile.picture,
    });
    await user.save();
  }
  return user;
}
