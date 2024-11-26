"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CalendarIcon, UserIcon, GraduationCapIcon, ClockIcon } from 'lucide-react'
import { format } from "date-fns"
import { updateApplication } from "@/actions/application"

export default function AdmissionDetail({ admission }) {
  const handleEnroll = async (applicationId) => {
    await updateApplication(applicationId, "enrolled", admission._id)
  }

  const handleReject = async (applicationId) => {
    await updateApplication(applicationId, "rejected", admission._id)
  }

  return (
    <div className="min-h-screen w-full">
    {/* Admission Details */}
    <Card className="mb-12 bg-white shadow-xl">
      <div className="bg-blue-600 rounded-md p-6">
        <CardTitle className="text-3xl text-white font-bold">
          Admission Detail
        </CardTitle>
        <CardDescription className="text-blue-100 mt-2 text-lg">
          Course: {admission.course.title}
        </CardDescription>
      </div>
      <CardContent className="p-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="font-semibold text-blue-800 mb-2">Course Description</h3>
            <p className="text-gray-600">{admission.course.description}</p>
          </div>
          <div>
            <h3 className="font-semibold text-blue-800 mb-2">Batch</h3>
            <p className="text-gray-600">{admission.batch.title}</p>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <CalendarIcon className="h-5 w-5 text-blue-600" />
            <span>
              Start Date: {format(new Date(admission.startDate), "dd MMMM yyyy")}
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <CalendarIcon className="h-5 w-5 text-blue-600" />
            <span>
              End Date: {format(new Date(admission.endDate), "dd MMMM yyyy")}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-gray-50 rounded-md px-6 py-4">
        <Badge
          className={`px-4 py-2 text-sm font-medium rounded-full ${
            admission.status === "open"
              ? "bg-green-100 text-green-800"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          {admission.status.toUpperCase()}
        </Badge>
      </CardFooter>
    </Card>
  
    {/* Applications */}
    <h2 className="text-3xl font-bold mb-8 text-blue-800 text-center">
      Applications
    </h2>
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {admission.applications.map((application) => (
        <Card
          key={application._id}
          className="bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
        >
          <CardHeader className="bg-blue-50 ">
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12 ">
                <AvatarImage
                  src={application.user.image}
                  alt={application.user.name}
                />
                <AvatarFallback className="text-lg font-semibold bg-blue-200 text-blue-700">
                  {application.user.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="overflow-hidden">
                <CardTitle className="text-sm text-blue-800 truncate">
                  {application.user.name}
                </CardTitle>
                <CardDescription className="text-blue-600 truncate">
                  {application.user.email}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-gray-600">
                <UserIcon className="h-5 w-5 text-blue-600" />
                <span className="text-sm">CNIC: {application.info.CNIC}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <CalendarIcon className="h-5 w-5 text-blue-600" />
                <span className="text-sm">
                  DOB: {format(new Date(application.info.DOB), "dd MMMM yyyy")}
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <GraduationCapIcon className="h-5 w-5 text-blue-600" />
                <span className="text-sm">Address: {application.info.address}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <ClockIcon className="h-5 w-5 text-blue-600" />
                <span className="text-sm">
                  Applied on: {format(new Date(application.createdAt), "dd MMMM yyyy")}
                </span>
              </div>
              <Separator className="my-4" />
             
            </div>
          </CardContent>
          <CardFooter className="bg-gray-50 flex justify-center p-4">
            {application.status === "pending" ? (
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <Button
                  className="w-full sm:w-1/2 bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => handleEnroll(application._id)}
                >
                  Enroll
                </Button>
                <Button
                  className="w-full sm:w-1/2 bg-red-600 hover:bg-red-700 text-white"
                  onClick={() => handleReject(application._id)}
                >
                  Reject
                </Button>
              </div>
            ):<Badge
            className={`px-3 py-1 text-sm font-medium rounded-full ${
               application.status === "enrolled"
                ? "bg-green-100 hover:bg-green-100 text-green-800"
                : "bg-red-100 hover:bg-red-100 text-red-800"
            }`}
          >
            {application.status.toUpperCase()}
          </Badge>}
          </CardFooter>
        </Card>
      ))}
    </div>
  </div>
  
    
  )
}




