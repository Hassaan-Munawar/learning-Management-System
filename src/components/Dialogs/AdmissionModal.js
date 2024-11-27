"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { addAdmission } from "@/actions/admissions";
import { useMediaQuery } from "@/hooks/use-media-query";


export function NewAdmissionModal({ courses, batches }) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");;

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Add Admission</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Admission</DialogTitle>
          </DialogHeader>
          <BatchForm courses={courses} batches={batches} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Add Admission</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Add Admission</DrawerTitle>
        </DrawerHeader>
        <BatchForm className="px-4" courses={courses} batches={batches} />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function BatchForm({ className, courses, batches }) {
  const [chosenCourse, setChosenCourse] = React.useState("");
  return (
    <form action={addAdmission} className={cn("grid items-start gap-4 mx-4 md:mx-0", className)}>
      {/* Batch Name */}
      {/* Course */}
      <div className="grid gap-2">
        <Label htmlFor="course">Course</Label>
        <Select
          required
          onValueChange={(value) => setChosenCourse(value)}
          name="course"
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Course" />
          </SelectTrigger>
          <SelectContent>
            {courses.map((course) => (
              <SelectItem key={course._id} value={course._id}>
                {course.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {chosenCourse && (
        <div className="grid gap-2">
          <Label htmlFor="course">Batch</Label>
          <Select required name="batch">
            <SelectTrigger>
              <SelectValue placeholder="Select Batch" />
            </SelectTrigger>
            <SelectContent>
              {batches
                .filter((data) => data.course._id == chosenCourse)
                .map((batch) => (
                  <SelectItem key={batch._id} value={batch._id}>
                    {batch.title}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>
      )}

      <div className="grid gap-2">
        <Label htmlFor="course">Start Date</Label>
        <Input required type="date" name="startDate" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="course">End Date</Label>
        <Input required type="date" name="endDate" />
      </div>

      <Button type="submit">New Admissions</Button>
    </form>
  );
}
