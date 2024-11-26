import { getBatches } from "@/actions/batches";
import { getCourses } from "@/actions/courses";
import { getTrainers } from "@/actions/trainers";
import { BatchesTable } from "@/components/DataTables/BatchTable";
import { BatchModal } from "@/components/Dialogs/BatchModal";

export default async function Batches() {
  const { batches } = await getBatches();
  const { courses } = await getCourses();
  const {trainers} = await getTrainers()

  return (
    <div>
      <div className="flex justify-end my-2">
        <BatchModal trainers={trainers} courses={courses} />
      </div>

      <BatchesTable data={batches} />
    </div>
  );
}