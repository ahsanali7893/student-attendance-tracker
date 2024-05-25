import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import moment from "moment";

const AttendanceGrid = ({ attendance, selectedMonth }: any) => {
  const [rowData, setRowData] = useState<any>();
  const [colDef, setColDef] = useState([{ field: "id" }, { field: "name" }]);

  const daysInMonth = (year: number, month: number) =>
    new Date(year, month + 1, 0).getDate();

  console.log("Selected Month:", selectedMonth);
  const selectedYear = parseInt(moment(selectedMonth).format("YYYY"), 10);
  const selectedMonthNumber = parseInt(moment(selectedMonth).format("MM"), 10);

  const numberOfDays = daysInMonth(selectedYear, selectedMonthNumber);
  const daysArray = Array.from({ length: numberOfDays }, (_, i) => 1 + i);

  useEffect(() => {
    if (attendance) {
      const userList: any[] = getUniqueRecord();
      setRowData(userList);
      daysArray.forEach((day) => {
        // Changed variable name from 'date' to 'day'
        setColDef((prevData: any) => [
          ...prevData,
          {
            field: day.toString(), // Changed 'date' to 'day'
            width: 50,
            editable: true,
          },
        ]);
        userList.forEach((obj: any) => {
          // Ensure 'obj' represents objects from 'userList'
          obj[day] = isPresent(obj.id, day); // Pass 'obj.id' and 'day' to isPresent function
        });
      });
    }
  }, [attendance]);

  const isPresent = (id: any, day: any) => {
    const result = attendance.find(
      (item: { id: any; day: any }) => item.day === day && item.id === id // Use strict equality '==='
    );
    return result ? true : false;
  };

  /**
   * Used to get Distict User list
   * @param {*}id
   * @param {*}day
   * @returns
   */

  const getUniqueRecord = () => {
    const uniqueRecord: any[] = [];
    const existingUser = new Set();

    attendance?.forEach((record: any) => {
      if (!existingUser.has(record.studentId)) {
        existingUser.add(record.studentId);
        uniqueRecord.push(record);
      }
    });
    return uniqueRecord;
  };

  return (
    <div>
      <div className="ag-theme-quartz" style={{ height: 500 }}>
        <AgGridReact rowData={rowData} columnDefs={colDef} />
      </div>
    </div>
  );
};

export default AttendanceGrid;
