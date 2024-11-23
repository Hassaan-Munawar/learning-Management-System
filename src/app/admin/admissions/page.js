import { getAdmissions } from "@/actions/admissions";
import { getBatches } from "@/actions/batches";
import { getCourses } from "@/actions/courses";
import { AdmissionTable } from "@/components/DataTables/AdmissionTable";
import { NewAdmissionModal } from "@/components/Dialogs/AdmissionModal";

export default async function Admissions() {
  const { admissions } = await getAdmissions();
  const { courses } = await getCourses();
  const { batches } = await getBatches();

  return (
    <div className="min-h-screen p-10">
      <div className="flex justify-between my-2">
        <h1 className="text-3xl font-bold text-center">Admissions</h1>
        <NewAdmissionModal courses={courses} batches={batches} />
      </div>

      <AdmissionTable data={admissions} />
    </div>
  );
}