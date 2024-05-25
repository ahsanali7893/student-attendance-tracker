import React from "react";

const GradeSelection = ({ selectGrade }: any) => {
  return (
    <div>
      <select
        className="p-2 border rounded-lg"
        onChange={(e) => selectGrade(e.target.value)}
      >
        <option value={"5th"}>5th</option>
        <option value={"6th"}>6th</option>
        <option value={"7th"}>7th</option>
      </select>
    </div>
  );
};

export default GradeSelection;
