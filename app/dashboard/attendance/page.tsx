"use client";
import React, { useState } from "react";
import MonthSelection from "../students/_components/MonthSelection";
import GradeSelection from "../students/_components/GradeSelection";
import { Button } from "@/components/ui/button";
import GlobalApi from "@/app/_utils/GlobalApi";
import moment from "moment";
import AttendanceGrid from "./_components/AttendanceGrid";

const Attendance = () => {
  const [attendanceList, setAttendanceList] = useState();
  const [selectedMonth, setSelectedMonth] = useState();
  const [selectGrade, setSelectedGrade] = useState("");
  const onSearchHandler = () => {
    const month = moment(selectedMonth).format("MMM yyyy");

    GlobalApi.getAttendance(selectGrade, month).then((resp: any) => {
      console.log(resp);
      setAttendanceList(resp.data);
    });
  };

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold">Attendance</h2>
      <div className="flex gap-4 p-4 border rounded-lg shadow-sm my-5">
        <div className="flex gap-2 items-center">
          <label>Select Month:</label>
          <MonthSelection
            selectedMonth={(value: any) => setSelectedMonth(value)}
          />
        </div>
        <div className="flex gap-2 items-center">
          <label>Select Grade:</label>
          <GradeSelection selectGrade={(v: any) => setSelectedGrade(v)} />
        </div>
        <Button onClick={() => onSearchHandler()}>Search</Button>
      </div>
      <AttendanceGrid
        attendanceList={attendanceList}
        selectedMonth={selectedMonth}
      />
    </div>
  );
};

export default Attendance;
