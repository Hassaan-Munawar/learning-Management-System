import { getAdmissions } from "@/actions/admissions";
import { EyeIcon } from "lucide-react";
import Link from "next/link";

export default async function Students() {
    const { admissions } = await getAdmissions()

    return (
        <section className="bg-white rounded-md shadow-md mt-6">
            <div className="p-4 border-b border-gray-200">

            </div>
            <div className="overflow-x-auto">
                <table className="w-full table-auto text-center">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-4 text-sm font-medium text-gray-500">Course</th>
                            <th className="p-4 text-sm font-medium text-gray-500">Batch</th>
                            <th className="p-4 text-sm font-medium text-gray-500">Applications</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            admissions.map((data) => {
                                return (
                                    <tr key={data._id} className="border-b">
                                        <td className="p-4 text-gray-600">{data.course.title}</td>
                                        <td className="p-4 text-gray-600">{data.batch.title}</td>
                                        <td className="p-4 text-gray-600"><Link className="flex justify-center items-center gap-4" href={`/admin/applications/${data._id}`}>
                                            <EyeIcon className="bg-secondary text-primary" /> View
                                        </Link></td>
                                    </tr>

                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </section>
    )
}
