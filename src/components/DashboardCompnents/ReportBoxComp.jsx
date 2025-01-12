import React from "react";

const ReportBoxComp = ({ title, count, male, female }) => {
  return (
    <div className="w-[14%] bg-[#FAFAFA] flex flex-col justify-center items-center  rounded-[15px] h-[115px] shadow-[0_4px_4px_3px_#FA6E6E40]">
      {/* Title */}
      <h1 className="text-[#000000] text-[0.938rem] text-center font-bold">{title}</h1>

      {/* Conditionally Show Male/Female Counts */}
      {male !== undefined && female !== undefined && (
        <div className="flex justify-between gap-4 items-center">
          <p className="text-[#000000] text-[0.625rem] font-bold">M: {male}</p>
          <p className="text-[#000000] text-[0.625rem] font-bold">F: {female}</p>
        </div>
      )}

      {/* Total Count */}
      <p className="text-[#CC0001] text-[2rem] font-bold">{count}</p>
    </div>
  );
};

export default ReportBoxComp;
