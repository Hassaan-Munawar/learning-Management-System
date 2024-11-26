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
import { addBatch } from "@/actions/batches";
import { useMediaQuery } from "@/hooks/use-media-query";



export function BatchModal({ trainers , courses }) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Add Batch</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Batch</DialogTitle>
          </DialogHeader>
          <BatchForm trainers={trainers} courses={courses} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Add Batch</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Add Batch</DrawerTitle>
        </DrawerHeader>
        <BatchForm trainers={trainers} courses={courses} />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function BatchForm({ className,trainers, courses }) {
  return (
    <form action={addBatch} className={cn("grid items-start gap-4 mx-4 md:mx-0", className)}>
      {/* Batch Name */}
      <div className="grid gap-2">
        <Label htmlFor="batchName">Batch Name</Label>
        <Input
          required
          type="text"
          id="batchName"
          name="title"
          defaultValue=""
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="description">Description</Label>
        <Input
          required
          type="text"
          id="description"
          name="description"
          defaultValue=""
        />
      </div>

      {/* Course */}
      <div className="grid gap-2">
        <Label htmlFor="course">Course</Label>
        <Select required name="course">
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

      <div className="grid gap-2">
        <Label htmlFor="trainer">Trainer</Label>
        <Select required name="trainer">
          <SelectTrigger>
            <SelectValue placeholder="Select Trainer" />
          </SelectTrigger>
          <SelectContent>
            {trainers.map((trainer) => (
              <SelectItem key={trainer._id} value={trainer.name}>
                {trainer.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button type="submit">Add Batch</Button>
    </form>
  );
}
