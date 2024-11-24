import { getCourses } from "@/actions/courses";
import { CourseTable } from "@/components/DataTables/CourseTable";
import { CourseDialog } from "@/components/Dialogs/CourseModal";

export default async function Courses() {
  const { courses } = await getCourses();
  return (
    <div>
      <div className="flex justify-end my-2">
        <CourseDialog />
      </div>
      <CourseTable courses={courses} />
    </div>
  );
}