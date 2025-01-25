import React from "react";
import { useNavigate } from "react-router-dom";

const LogoutPopUpComp = ({ show, setShow }) => {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem("token")
    setShow(false)
    navigate("/login")
  }
  return (
    <>
      {/* Overlay */}
      <div
        className={`${
          show ? "scale-100 opacity-100" : "scale-0 opacity-0"
        } transition-all duration-300 fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50`}
      >
        {/* Pop-up */}
        <div className="desktop:w-[353px] laptop:w-[400px] tablet:w-[80%] mobile:w-[95%] desktop:h-[202px] large-desktop:w-[700px] large-desktop:h-[404px] bg-[#FFDDDA] rounded-[15px] flex flex-col justify-center items-center p-6 gap-6">
          <h1 className="text-[#FF0000] text-center tablet:text-[15px] laptop:text-[15px] desktop:text-[24px] large-desktop:text-[36px] font-bold">
            Are you sure <br /> You want to logout?
          </h1>
          <div className="w-full flex justify-center items-center tablet:gap-6 mobile:gap-4 laptop:gap-4 desktop:gap-4 large-desktop:gap-16">
            <button
              className="desktop:w-[123px] laptop:w-[100px] tablet:w-[100px] mobile:w-[80px] mobile:w-[30px] tablet:h-[30px] laptop:h-[30px] desktop:h-[40px] large-desktop:w-[246px] large-desktop:h-[80px] bg-[#FFFFFF] rounded-[15px] large-desktop:text-[30px] active:scale-90 text-[#CC0001] font-medium"
              onClick={() => setShow(false)} // Close the pop-up on cancel
            >
              Cancel
            </button>
            <button
            onClick={() => handleLogout()}
              className="desktop:w-[123px] laptop:w-[100px]  tablet:w-[100px] mobile:w-[80px] mobile:w-[30px] tablet:h-[30px] laptop:h-[30px] desktop:h-[40px] large-desktop:w-[246px] large-desktop:h-[80px] bg-[#CC0001] rounded-[15px] large-desktop:text-[30px] active:scale-90 text-[#FFFFFF] font-medium"
            //   onClick={onLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogoutPopUpComp;
