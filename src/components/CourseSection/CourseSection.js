"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { useSession } from "next-auth/react";
import { ApplicationModalForm } from "../Dialogs/ApplicationModal";

export function CourseSection({ admissions }) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div class="flex items-center justify-center h-20 bg-blue-600">
    <div class="loader border-t-4 border-b-4 border-white rounded-full w-14 h-14 animate-spin"></div>
</div>;
  }

  return (
    <section className="bg-blue-600  min-h-screen flex flex-col items-center justify-center text-white">
      {/* Header Section */}
      <div className="px-4 py-8 md:py-4 text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">
          Apply to Our Latest Courses
        </h1>
        <p className="opacity-90 mt-2 text-sm md:text-base text-gray-200">
          Explore a variety of courses and start your learning journey with us today!
        </p>
      </div>

      {/* Courses Grid */}
      <div className="w-screen px-4 py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {admissions.map((admission) => (
          <Card
            key={admission._id}
            className="h-full flex flex-col border border-blue-500 bg-blue-500 text-white shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg font-bold text-white">
                    {admission.course.title}
                  </CardTitle>
                  <CardDescription className="text-gray-100">
                    {admission.batch.title}
                  </CardDescription>
                  <CardDescription className="text-gray-100">Trainer: {admission.batch.trainer}
                  </CardDescription>
                </div>
                <span
                  className={"text-sm font-medium px-4 py-1 rounded-full bg-white text-green-600"}
                >
                  {admission.status}
                </span>

              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-gray-100 mb-4">{admission.course.description}</p>
              <div className="flex flex-col space-y-2 text-sm">
                <div className="flex items-center text-gray-200">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>
                    Start Date:{" "}
                    {new Date(admission.startDate).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center text-gray-200">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>
                    End Date:{" "}
                    {new Date(admission.endDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              {status === "loading" ? (
                <Button variant="secondary" className="w-full" disabled>
                  Loading...
                </Button>
              ) : session?.user ? (
                <ApplicationModalForm admission={admission} />
              ) : (
                <Button
                  variant="outline"
                  className="w-full text-black"
                  asChild
                >
                  <Link href="/signin">Sign in to Apply</Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* No Admissions Message */}
      {admissions.length === 0 && (
        <p className="text-center text-gray-200 mt-8 opacity-90">
          No courses are currently open for admission. Check back later!
        </p>
      )}
    </section>
  );
}

export default CourseSection;





