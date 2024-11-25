"use client";
import * as React from "react";
import { z } from "zod";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { addApplication } from "@/actions/application";
import { useSession } from "next-auth/react";
import {toast } from 'react-toastify';


const formSchema = z.object({
  CNIC: z.string().min(13).max(13),
  DOB: z.string(),
  address: z.string().min(10).max(120),
});

export function ApplicationModalForm({ admission}) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = true;
  const { data: session } = useSession(); 


  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <div className="text-black">
          <Button variant="outline">Apply</Button>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Apply</DialogTitle>
          </DialogHeader>
          <ApplicationForm
            setOpen={setOpen}
            session={session}
            admission={admission}
          />
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
        <ApplicationForm admission={admission} session={session} setOpen={setOpen} className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ApplicationForm({ admission, session, setOpen }) {
  const form = useForm({
    resolver: zodResolver(formSchema)
  });

  async function onSubmit(values) {
    const obj = {
      course: admission.course._id,
      batch: admission.batch._id,
      user: session?.user?.id,
      admission: admission._id,
      info: {
        ...values,
      },
    };
    const response = await addApplication(obj);
    if (response.error) {
      toast.error("Sorry, You have already applied in this course");
    } else {
      toast.success("Your application is submitted successfully");
    }



    setOpen(false);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="CNIC"
          render={({ field }) => (
            <FormItem>
              <FormLabel>CNIC</FormLabel>
              <FormControl>
                <Input placeholder="Enter your CNIC" {...field} />
              </FormControl>
              <FormDescription>Add valid CNIC number.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="DOB"
          render={({ field }) => (
            <FormItem>
              <FormLabel>DOB</FormLabel>
              <FormControl>
                <Input type="date" placeholder="DOB" {...field} />
              </FormControl>
              <FormDescription>Add valid DOB.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter your address" {...field} />
              </FormControl>
              <FormDescription>Add valid address.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">
          {form.formState.isSubmitting ? "Loading.." : "Submit"}
        </Button>
      </form>
    </Form>
  );
}
