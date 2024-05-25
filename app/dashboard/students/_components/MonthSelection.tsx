"use client";
import moment from "moment";
import { addMonths } from "date-fns";
import React, { useState } from "react";
import { CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const MonthSelection = ({ selectedMonth }: any) => {
  const today = new Date();
  const nextMonth = addMonths(new Date(), 0);
  const [month, setMonth] = useState(nextMonth);
  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="flex gap-2 items-center text-slate-400"
          >
            <CalendarDays className="h-5 w-5" />
            {moment(month).format("MMM yyyy")}
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          {" "}
          <Calendar
            month={month}
            onMonthChange={(value) => {
              selectedMonth(value);
              setMonth(value);
            }}
            mode="single"
            className="flex flex-1 justify-center"
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default MonthSelection;
