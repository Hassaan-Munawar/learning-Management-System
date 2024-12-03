import { getSingleAdmission } from "@/actions/admissions";
import AdmissionDetail from "@/components/AdmissionDetail/AdmissionDetail";

export default async function AdmissionDetailPage({ params }) {
  const id = params.id;
  const { admission } = await getSingleAdmission(id);
  return <AdmissionDetail admission={admission} />;
}
