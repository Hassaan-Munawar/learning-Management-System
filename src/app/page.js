import CourseSection from "@/components/CourseSection/CourseSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import { getAdmissions } from "@/actions/admissions";
// import { getSingleApplication } from "@/actions/application";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = getServerSession(authOptions)
  const { admissions } = await getAdmissions("open");
  // const {userApplications} = await getSingleApplication(session?.user?.id)
  return (
  <div>
    <HeroSection />
    <CourseSection admissions={admissions}  />
  </div>
  );
}
