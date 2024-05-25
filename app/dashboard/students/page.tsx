"use client";
import React, { useEffect, useState } from "react";
import AddNewStudent from "./_components/AddNewStudent";
import GlobalApi from "@/app/_utils/GlobalApi";
import StudentListTable from "./_components/StudentListTable";

const Students = () => {
  const [studentList, setStudentList] = useState([]);
  useEffect(() => {
    getAllStundent();
  }, []);
  const getAllStundent = () => {
    GlobalApi.getAllStundent().then((resp: any) => {
      setStudentList(resp.data);
    });
  };
  return (
    <div className="p-7">
      <h1 className="font-bold text-2xl flex justify-between items-center">
        Students
        <AddNewStudent />
      </h1>
      <StudentListTable studentList={studentList} />
    </div>
  );
};

export default Students;
