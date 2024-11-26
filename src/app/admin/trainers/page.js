import { getTrainers } from "@/actions/trainers";
import { TrainerDialog } from "@/components/Dialogs/TrainerModal";

export default async function Trainers() {
    const { trainers } = await getTrainers()

    return (
        <>
            <div className="flex justify-end my-2">
                <TrainerDialog />
            </div>
            <section className="bg-white rounded-md shadow-md mt-6">
                <div className="p-4 border-b border-gray-200">

                </div>
                <div className="overflow-x-auto">
                    <table className="w-full table-auto text-center">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="p-4 text-sm font-medium text-gray-500">Name</th>
                                <th className="p-4 text-sm font-medium text-gray-500">Email</th>
                                <th className="p-4 text-sm font-medium text-gray-500">Qualification</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                trainers.map((data) => {
                                    return (
                                        <tr key={data._id} className="border-b">

                                            <td className="p-4 text-gray-600">{data.name}</td>
                                            <td className="p-4 text-gray-600">{data.email}</td>
                                            <td className="p-4 text-gray-600">{data.qualification}</td>
                                        </tr>

                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </section>
        </>

    )
}