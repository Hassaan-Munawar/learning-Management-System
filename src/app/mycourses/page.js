import { getApplications } from "@/actions/application";
import { getServerSession } from "next-auth/next";
import ApplicationCard from "@/components/ApplicationCard/ApplicationCard";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function MyCourses() {
    const session = await getServerSession(authOptions)
    const { applications } = await getApplications({ user: session?.user?.id });

    return (
        <div className="bg-blue-400 py-8">
            <div className="space-y-6 p-3">
                {applications.map((application) => (
                    <ApplicationCard key={application._id} application={application} />
                ))}
            </div>
        </div>
    );
}