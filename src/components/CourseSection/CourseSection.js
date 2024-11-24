"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { useSession } from "next-auth/react";
import { ApplicationModalForm } from "../Dialogs/ApplicationModal";

export function CourseSection({ admissions }) {
  const { data: session, status } = useSession(); 

if (status === "loading") {
  return <div>Loading...</div>;
}

  return (
    <section className="bg-blue-600 py-12 px-4">
      <div className="flex justify-center items-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-0">Apply to our Latest Courses</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {admissions.map((admission) => (
          <div key={admission._id}>
            <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl mb-2">{admission.course.title}</CardTitle>
                    <CardDescription>{admission.batch.title}</CardDescription>
                  </div>
                  <span className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
                    {admission.status}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">{admission.course.description}</p>
                <div className="flex flex-col space-y-2 text-sm">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Start Date: {new Date(admission.startDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>End Date: {new Date(admission.endDate).toLocaleDateString()}</span>
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
    <Button variant="secondary" className="w-full" asChild>
      <Link href="/signin">Sign in to Apply</Link>
    </Button>
  )}
</CardFooter>

            </Card>
          </div>
        ))}
      </div>
      {admissions.length === 0 && (
        <p className="text-center text-muted-foreground mt-8">
          No courses are currently open for admission. Check back later!
        </p>
      )}
    </section>
  );
}

export default CourseSection;


