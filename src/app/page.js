import CourseSection from "@/components/CourseSection/CourseSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import { getAdmissions } from "@/actions/admissions";


export default async function Home() {
  const { admissions } = await getAdmissions("open");
  return (
  <div>
    <HeroSection />
    <CourseSection admissions={admissions} />
  </div>
  );
}
