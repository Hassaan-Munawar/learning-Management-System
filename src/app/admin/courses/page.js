import { getCourses } from "@/actions/courses";
import { CourseTable } from "@/components/DataTables/CourseTable";
import { CourseDialog } from "@/components/Dialogs/CourseModal";

export default async function Courses() {
  const { courses } = await getCourses();
  return (
    <div className="min-h-screen p-10">
      <div className="flex justify-between my-2">
        <h1 className="text-3xl font-bold text-center">Courses</h1>
        <CourseDialog />
      </div>
      <CourseTable courses={courses} />
    </div>
  );
}