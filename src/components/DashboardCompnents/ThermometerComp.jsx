import React, { useState } from 'react';

const ThermometerComp = () => {
  const [temperature, setTemperature] = useState(50);

  const handleChange = (e) => {
    setTemperature(e.target.value);
  };

  const getFillColor = () => {
    if (temperature < 33) return '#00BFFF'; // Blue (cold)
    if (temperature < 66) return '#FFA500'; // Orange (warm)
    return '#FF4500'; // Red (hot)
  };

  return (
    <div className="horizontal-thermometer-container">
      <div className="temperature-labels">
        <span>0°C</span>
        <span>25°C</span>
        <span>50°C</span>
        <span>75°C</span>
        <span>100°C</span>
      </div>
      <div className="horizontal-thermometer">
        <div
          className="horizontal-mercury"
          style={{ width: `${temperature}%`, backgroundColor: getFillColor() }}
        ></div>
        <input
          type="range"
          min="0"
          max="100"
          value={temperature}
          onChange={handleChange}
          className="horizontal-slider"
        />
      </div>
    </div>
  );
};

export default ThermometerComp;
