import CourseSection from "@/components/CourseSection/CourseSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import { getAdmissions } from "@/actions/admissions";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";


export default async function Home() {
  const { admissions } = await getAdmissions("open");
  const session = getServerSession(authOptions)
  return (
  <div>
    <HeroSection />
    <CourseSection session={session} admissions={admissions} />
  </div>
  );
}
