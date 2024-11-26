import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarIcon, InfoIcon, MapPinIcon, UserIcon } from "lucide-react";

export default function ApplicationCard({ application }) {
  return (
    <Card className="w-full max-w-3xl border border-blue-500 mx-auto bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg text-white">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">Application Details</CardTitle>
        <Badge
          variant={application.status === "pending" ? "secondary" : "default"}
          className="text-sm bg-white text-blue-700 px-3 py-1 rounded-full"
        >
          {application.status.toUpperCase()}
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          {/* User Information */}
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
              <h3 className="text-lg font-semibold">{application.user.name}</h3>
              <p className="text-sm opacity-80">{application.user.email}</p>
            </div>
          </div>
          {/* Details Section */}
          <div className="grid gap-4">
            <div className="flex items-center space-x-2">
              <UserIcon className="h-5 w-5 opacity-90" />
              <span className="text-sm font-medium">
                CNIC: {application.info.CNIC}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <CalendarIcon className="h-5 w-5 opacity-90" />
              <span className="text-sm font-medium">
                Date of Birth:{" "}
                {new Date(application.info.DOB).toLocaleDateString()}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPinIcon className="h-5 w-5 opacity-90" />
              <span className="text-sm font-medium">
                Address: {application.info.address}
              </span>
            </div>
          </div>
          {/* Course Details */}
          <div className="grid gap-2 bg-blue-700 p-4 rounded-lg">
            <h4 className="font-semibold text-lg">Course Details</h4>
            <p className="text-sm">Course: {application.course.title}</p>
            <p className="text-sm">Batch: {application.batch.title}</p>
            {/* <p className="text-sm">Trainer: {application.batch.trainer}</p> */}
          </div>
          {/* Admission Details */}
          <div className="grid gap-2 bg-blue-700 p-4 rounded-lg">
            <h4 className="font-semibold text-lg">Admission Details</h4>
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
          {/* Application Meta */}
          <div className="flex flex-col space-y-1 text-xs opacity-80">
            <span>
              Created: {new Date(application.createdAt).toLocaleString()}
            </span>
            <span>
              Last Updated: {new Date(application.updatedAt).toLocaleString()}
            </span>
            <span>Application ID: {application._id}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

