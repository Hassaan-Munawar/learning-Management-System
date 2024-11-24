import { getBatches } from "@/actions/batches";
import { getCourses } from "@/actions/courses";
import { BatchesTable } from "@/components/DataTables/BatchTable";
import { BatchModal } from "@/components/Dialogs/BatchModal";

export default async function Batches() {
  const { batches } = await getBatches();
  const { courses } = await getCourses();

  return (
    <div>
      <div className="flex justify-end my-2">
        <BatchModal courses={courses} />
      </div>

      <BatchesTable data={batches} />
    </div>
  );
}