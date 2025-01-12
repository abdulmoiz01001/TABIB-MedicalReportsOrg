// ThermometerComp.js
import React from "react";
import Thermometer from "react-thermometer-component";

const ThermometerComp = ({
  theme = "light",
  value = 0,
  max = 100,
  steps = 0,
  format = "°F",
  size = "small",
  height = 200,
}) => {
  return (
      <div className="rotate-90 flex flex-col " style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
        <span className=" -rotate-90 -translate-x-4  translate-y-16 text-[12px] font-semibold text-gray-700">Body Temperature</span>
      <Thermometer
        theme={theme}
        value={value}
        max={max}
        steps={steps}
        format={format}
        size={size}
        height={height}
      />
    </div>
  );
};

export default ThermometerComp;
