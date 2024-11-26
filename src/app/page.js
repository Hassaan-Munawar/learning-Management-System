import CourseSection from "@/components/CourseSection/CourseSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import { getAdmissions } from "@/actions/admissions";
import { getSingleApplication } from "@/actions/application";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const { admissions } = await getAdmissions("open");

  let userApplications = [];
  
  if (session?.user && session?.user?.name != "Admin") {
    const { userApplications: fetchedApplications } = await getSingleApplication(session?.user?.id);
    userApplications = fetchedApplications || [];
  }
  else if(session?.user?.name == "Admin"){
    userApplications = []
  }

  return (
    <div>
      <HeroSection />
      <CourseSection admissions={admissions} applications={userApplications} />
    </div>
  );
}

