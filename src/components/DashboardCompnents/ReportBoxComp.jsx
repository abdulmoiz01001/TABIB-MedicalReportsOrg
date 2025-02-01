import React, { useEffect } from "react";
import { clsx } from "clsx";

const ReportBoxComp = ({ data, title, title2 }) => {
  useEffect(() => {
    console.log("Report Box Data:", data);
  }, [data]);

  const containerClass = clsx(
    "bg-[#FAFAFA] border border-[#CC0001] rounded-[15px] flex flex-col items-center justify-end px-2",
    "mobile:w-[48%] mobile:h-[120px] mobile:justify-center",
    "tablet:w-[48%] tablet:py-3",
    "laptop:w-full laptop:py-1.5",
    "desktop:w-[15%] desktop:py-2",
    "large-desktop:w-[13%] large-desktop:py-5"
  );

  const titleClass = clsx(
    "text-[#000000] text-center font-semibold",
    "large-desktop:text-[2rem] large-desktop:leading-[35px]",
    "desktop:text-[1.5rem] desktop:leading-7",
    "laptop:text-[0.8rem]",
    "tablet:text-[0.8rem]"
  );

  const countClass = clsx(
    "text-[#CC0001] font-bold",
    "mobile:text-[2rem]",
    "tablet:text-[2rem]",
    "laptop:text-[3rem]",
    "desktop:text-[3.2rem]",
    "large-desktop:text-[5rem]"
  );

  const genderCountClass = clsx(
    "text-[#000000] font-bold",
    "large-desktop:text-[1.2rem]",
    "tablet:text-[0.6rem]",
    "laptop:text-[0.8rem]",
    "text-[1rem]"
  );

  return (
    <div className={containerClass}>
      {/* Title */}
      <h1 className={titleClass}>
        {title} <br /> {title2}
      </h1>

      {/* Gender Counts */}
      {data ? (
        <>
          {data?.male >= 0 && data?.female >= 0 && (
            <div className="flex justify-between items-center w-[70%] large-desktop:w-[85%] laptop:px-1 mobile:px-2 desktop:gap-7">
              <p className={genderCountClass}>M: {data?.male}</p>
              <p className={genderCountClass}>F: {data?.female}</p>
            </div>
          )}

          {/* Total Count */}
          <p className={countClass}>
            {data?.total === undefined ? data : data?.total}
          </p>
        </>
      ) : (
        <p className={countClass}>0</p>
      )}
    </div>
  );
};

export default ReportBoxComp;
