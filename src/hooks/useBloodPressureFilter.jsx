
const useBloodPressureFilter = (data ,filter) => {

  const filteredData = data.filter(item => {
    // Filter according to the required Blood Pressure filter criteria
    if (filter === "High Blood Pressure") {
      return item.BloodPressure.HighPressure >= 139; // Assuming HighPressure is the value to check
    }
    if (filter === "Low Blood Pressure") {
      return item.BloodPressure.LowPressure <= 60; // Assuming LowPressure is the value to check
    }
    if (filter === "Normal Blood Pressure") {
      return item.BloodPressure.LowPressure >= 61 && item.BloodPressure.HighPressure <= 138; // Example for Normal BP
    }
    if(filter === "Female"){
      return item.Member.Sex == 0
    }
    if(filter === "Male"){
      return item.Member.Sex == 1
    }

    
    return false; // default case, return nothing
  });
  
  return filteredData;
};

export default useBloodPressureFilter;
