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
    <div>
      <div className="flex justify-end my-2">
        <NewAdmissionModal courses={courses} batches={batches} />
      </div>

      <AdmissionTable data={admissions} />
    </div>
  );
}