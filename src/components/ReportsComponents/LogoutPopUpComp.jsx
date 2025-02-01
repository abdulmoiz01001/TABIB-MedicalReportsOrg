import React from "react";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

const LogoutPopUpComp = ({ show, setShow }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setShow(false);
    navigate("/login");
  };

  // Overlay styles
  const overlayClasses = clsx(
    "fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50",
    "transition-all duration-300",
    show ? "scale-100 opacity-100" : "scale-0 opacity-0"
  );

  // Pop-up container styles
  const popupClasses = clsx(
    "bg-[#FFDDDA] rounded-[15px] flex flex-col justify-center items-center p-6 gap-6",
    "desktop:w-[353px] laptop:w-[400px] tablet:w-[80%] mobile:w-[95%]",
    "desktop:h-[202px] large-desktop:w-[700px] large-desktop:h-[404px]"
  );

  // Heading styles
  const headingClasses = clsx(
    "text-[#FF0000] text-center font-bold",
    "tablet:text-[15px] laptop:text-[15px] desktop:text-[24px] large-desktop:text-[36px]"
  );

  // Button container styles
  const buttonContainerClasses = clsx(
    "w-full flex justify-center items-center",
    "tablet:gap-6 mobile:gap-4 laptop:gap-4 desktop:gap-4 large-desktop:gap-16"
  );

  // Common button styles
  const buttonBaseClasses = clsx(
    "rounded-[15px] active:scale-90 font-medium"
  );

  // Cancel button styles
  const cancelButtonClasses = clsx(
    buttonBaseClasses,
    "bg-[#FFFFFF] text-[#CC0001]",
    "desktop:w-[123px] laptop:w-[100px] tablet:w-[100px] mobile:w-[80px]",
    "tablet:h-[30px] laptop:h-[30px] desktop:h-[40px] large-desktop:w-[246px] large-desktop:h-[80px]",
    "large-desktop:text-[30px]"
  );

  // Logout button styles
  const logoutButtonClasses = clsx(
    buttonBaseClasses,
    "bg-[#CC0001] text-[#FFFFFF]",
    "desktop:w-[123px] laptop:w-[100px] tablet:w-[100px] mobile:w-[80px]",
    "tablet:h-[30px] laptop:h-[30px] desktop:h-[40px] large-desktop:w-[246px] large-desktop:h-[80px]",
    "large-desktop:text-[30px]"
  );

  return (
    <>
      {/* Overlay */}
      <div className={overlayClasses}>
        {/* Pop-up */}
        <div className={popupClasses}>
          <h1 className={headingClasses}>
            Are you sure <br /> You want to logout?
          </h1>
          <div className={buttonContainerClasses}>
            <button className={cancelButtonClasses} onClick={() => setShow(false)}>
              Cancel
            </button>
            <button className={logoutButtonClasses} onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogoutPopUpComp;
