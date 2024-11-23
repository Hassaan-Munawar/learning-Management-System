import { getBatches } from "@/actions/batches";
import { getCourses } from "@/actions/courses";
import { BatchesTable } from "@/components/DataTables/BatchTable";
import { BatchModal } from "@/components/Dialogs/BatchModal";

export default async function Batches() {
  const { batches } = await getBatches();
  const { courses } = await getCourses();

  return (
    <div className="min-h-screen p-10">
      <div className="flex justify-between my-2">
        <h1 className="text-3xl font-bold text-center">Batches</h1>
        <BatchModal courses={courses} />
      </div>

      <BatchesTable data={batches} />
    </div>
  );
}