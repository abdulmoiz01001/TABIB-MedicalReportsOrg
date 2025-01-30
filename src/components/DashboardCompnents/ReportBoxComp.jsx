import React, { useEffect } from "react";

const ReportBoxComp = ({ data, title, title2 , count }) => {
  useEffect(() => {
    console.log("report box data",data)
  }
  ,[data])
  


  return (
    <div className=" mobile:w-[48%] mobile:h-[120px] mobile:justify-center tablet:w-[48%] desktop:w-[40%] laptop:w-full   tablet:py-3 laptop:py-1.5 desktop:py-2 large-desktop:py-5 bg-[#FAFAFA] px-2 flex flex-col justify-end items-center  rounded-[15px] h-[90%] border border-[#CC0001]">
      {/* Title */}
      <h1 className="text-[#000000] large-desktop:text-[2rem] tablet:text-[0.8rem] desktop:text-[1.5rem] laptop:text-[0.8rem] large-desktop:leading-[35px] desktop:leading-7 text-center font-semibold">{title} <br /> {title2}</h1>
      {/* <h1 className="text-[#000000] text-[1.5rem] text-center font-bold"></h1> */}
      {data ? <>
        {/* Conditionally Show Male/Female Counts */}
        {data?.male >= 0 && data?.female  >= 0 && (
          <div className="flex justify-between laptop:px-1 mobile:px-2 desktop:gap-7 w-[70%] large-desktop:w-[85%]  items-center">
            <p className="text-[#000000] large-desktop:text-[1.2rem] tablet:text-[0.6rem] laptop:text-[0.8rem]  text-[1rem] font-bold">M: {data?.male}</p>
            <p className="text-[#000000] large-desktop:text-[1.2rem] tablet:text-[0.6rem] laptop:text-[0.8rem]  text-[1rem] font-bold">F: {data?.female}</p>
          </div>
        )} 

        {/* Total Count */}
        <p className="text-[#CC0001] mobile:text-[2rem] large-desktop:text-[5rem] tablet:text-[2rem] laptop:text-[3rem] desktop:text-[3.2rem] font-bold">{data?.total == undefined ? data : data?.total }</p>

      </>:<>
      <p className="text-[#CC0001] large-desktop:text-[8rem] laptop:text-[] desktop:text-[3.2rem] font-bold">0</p>

      </>}
    </div>
  );
};

export default ReportBoxComp;
