import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarIcon, InfoIcon, MapPinIcon, UserIcon } from "lucide-react";

export default function ApplicationCard({ application }) {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">
          Application Details
        </CardTitle>
        <Badge
          variant={application.status === "pending" ? "secondary" : "default"}
        >
          {application.status.toUpperCase()}
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="flex items-center space-x-4">
            <Avatar className="h-16 w-16">
              <AvatarImage
                src={application.user.image}
                alt={application.user.name}
              />
              <AvatarFallback>
                {application.user.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-lg font-semibold">
                {application.user.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {application.user.email}
              </p>
            </div>
          </div>
          <div className="grid gap-2">
            <div className="flex items-center space-x-2">
              <UserIcon className="h-4 w-4 opacity-70" />
              <span className="text-sm font-medium">
                CNIC: {application.info.CNIC}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <CalendarIcon className="h-4 w-4 opacity-70" />
              <span className="text-sm font-medium">
                Date of Birth:{" "}
                {new Date(application.info.DOB).toLocaleDateString()}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPinIcon className="h-4 w-4 opacity-70" />
              <span className="text-sm font-medium">
                Address: {application.info.address}
              </span>
            </div>
          </div>
          <div className="grid gap-2">
            <h4 className="font-semibold">Course Details</h4>
            <p className="text-sm">Course: {application.course.title}</p>
            <p className="text-sm">Batch: {application.batch.title}</p>
          </div>
          <div className="grid gap-2">
            <h4 className="font-semibold">Admission Details</h4>
            <p className="text-sm">
              Start Date:{" "}
              {new Date(application.admission.startDate).toLocaleDateString()}
            </p>
            <p className="text-sm">
              End Date:{" "}
              {new Date(application.admission.endDate).toLocaleDateString()}
            </p>
            <p className="text-sm">Status: {application.admission.status}</p>
          </div>
          <div className="flex items-center space-x-2">
            <InfoIcon className="h-4 w-4 opacity-70" />
            <span className="text-xs text-muted-foreground">
              Application ID: {application._id}
            </span>
          </div>
          <div className="text-xs text-muted-foreground">
            Created: {new Date(application.createdAt).toLocaleString()}
            <br />
            Last Updated: {new Date(application.updatedAt).toLocaleString()}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
