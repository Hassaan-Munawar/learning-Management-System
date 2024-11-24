import { getSingleAdmission } from "@/actions/admissions";
import AdmissionDetail from "@/components/AdmissionDetail/AdmissionDetail";

export default async function AdmissionDetailPage({ params }) {
  const id = params.id;
  const { admission } = await getSingleAdmission(id);
  console.log("admission==>",admission)
  return <AdmissionDetail admission={admission} />;
}
