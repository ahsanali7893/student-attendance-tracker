"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { LoaderIcon } from "lucide-react";

type Inputs = {
  name: string;
  grade: string;
  contact: string;
  address: string;
};

const AddNewStudent = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setLoading(true);
    setTimeout(() => {
      if (data) {
        reset();
        setOpen(false);
        toast("New Student Added");
      }
      setLoading(false);
    }, 1000);
  };
  return (
    <div>
      <Button onClick={() => setOpen(true)}>+ Add New Student</Button>
      <Dialog open={open}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Student</DialogTitle>
            <DialogDescription>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="py-2">
                  <label>Full Name</label>
                  <Input
                    placeholder="Ex. John carry"
                    {...register("name", { required: true })}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label>Select Grade</label>
                  <select
                    className="p-3 border rounded-lg"
                    {...register("grade", { required: true })}
                  >
                    <option value={"5th"}>5th</option>
                    <option value={"6th"}>6th</option>
                    <option value={"7th"}>7th</option>
                  </select>
                </div>
                <div className="py-2">
                  <label>Contact Number</label>
                  <Input
                    type="number"
                    placeholder="Ex. +92314*****"
                    {...register("contact", { required: true })}
                  />
                </div>
                <div className="py-2">
                  <label>Address</label>
                  <Input
                    placeholder="Ex. 533 N Hyderabad street"
                    {...register("address", { required: true })}
                  />
                </div>
                <div className="flex gap-2 items-center justify-end mt-4">
                  <Button
                    type="button"
                    onClick={() => setOpen(false)}
                    variant="ghost"
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disabled={loading}>
                    {loading ? <LoaderIcon className="animate-spin" /> : "Save"}
                  </Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddNewStudent;
