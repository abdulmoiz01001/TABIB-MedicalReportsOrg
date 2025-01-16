import React from "react";

const ReportBoxComp = ({ title, title2 , count, male, female }) => {
  return (
    <div className="w-[14.5%]  bg-[#FAFAFA] px-2 flex flex-col justify-around items-center  rounded-[15px] h-[90%] border border-[#CC0001]">
      {/* Title */}
      <h1 className="text-[#000000] large-desktop:text-[3rem] text-[1.5rem] large-desktop:leading-[60px] desktop:leading-7 text-center font-bold">{title} <br /> {title2}</h1>
      {/* <h1 className="text-[#000000] text-[1.5rem] text-center font-bold"></h1> */}

      {/* Conditionally Show Male/Female Counts */}
      {male !== undefined && female !== undefined && (
        <div className="flex justify-between desktop:gap-7 large-desktop:gap-16  items-center">
          <p className="text-[#000000] large-desktop:text-[2rem]  text-[1rem] font-bold">M: {male}</p>
          <p className="text-[#000000] large-desktop:text-[2rem]  text-[1rem] font-bold">F: {female}</p>
        </div>
      )}

      {/* Total Count */}
      <p className="text-[#CC0001] large-desktop:text-[5rem] desktop:text-[2.7rem] font-bold">{count}</p>
    </div>
  );
};

export default ReportBoxComp;
