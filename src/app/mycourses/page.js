import { getApplications } from "@/actions/application";
import { getServerSession } from "next-auth/next";
import ApplicationCard from "@/components/ApplicationCard/ApplicationCard";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { FaBookOpen } from "react-icons/fa";

export default async function MyCourses() {
    const session = await getServerSession(authOptions)
    if (session?.user?.name == "Admin") {
        redirect('/')
    }
    const { applications } = await getApplications({ user: session?.user?.id });

    return (
        <div className="bg-blue-400 min-h-[90vh] lg:min-h-[89vh] py-8">
            <div className="space-y-6 p-3">
                {applications.length == 0 ? <div className="flex justify-center items-center">
                    <div className="text-center bg-white p-8 rounded-lg shadow-lg">
                        <FaBookOpen className="mx-auto text-blue-600 w-24 h-24 mb-6" />
                        <h1 className="text-xl font-semibold text-blue-600">
                            You have not applied for any course
                        </h1>
                    </div>
                </div> : applications.map((application) => (
                    <ApplicationCard key={application._id} application={application} />
                ))}
            </div>
        </div>
    );
}