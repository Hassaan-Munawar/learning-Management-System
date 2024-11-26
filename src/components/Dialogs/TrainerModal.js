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
import { addTrainer } from "@/actions/trainers";
import { useMediaQuery } from "@/hooks/use-media-query";


export function TrainerDialog() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Add Trainer</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Trainer</DialogTitle>
          
          </DialogHeader>
          <TrainerForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Add Trainer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Add Trainer</DrawerTitle>
        </DrawerHeader>
        <TrainerForm />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function TrainerForm({ className }) {
  return (
    <form
      action={addTrainer}
      className={cn("grid items-start gap-4 mx-4 md:mx-0", className)}
    >
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input required type="text" id="name" name={"name"} />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input required type="email" id="email" name={"email"} />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="qualification">Qualification</Label>
        <Input required id="qualification" name={"qualification"} />
      </div>
      <Button type="submit">Add Trainer</Button>
    </form>
  );
}