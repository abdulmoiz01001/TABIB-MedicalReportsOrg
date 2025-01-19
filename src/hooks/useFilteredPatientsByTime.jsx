
import { useState, useEffect } from 'react';
import { setFilteredReports } from '../store/features/PatientReportByTimeRange';
import { useDispatch } from 'react-redux';

const useFilteredPatientsByTime = (reports, startTime, endTime) => {
    const dispatch = useDispatch();
  const [filteredPatients, setFilteredPatients] = useState([]);

  useEffect(() => {
    if (!reports || !startTime || !endTime) return;

    // Convert startTime and endTime to Date objects
    const start = startTime;
    const end = endTime;

    console.log('Time range', start, end);

   

    // Filter reports based on measureTime being within the given range
    const filtered = reports.filter((report) => {
      const measureDate = report.measureTime; // Ensure the date format is correct
      return measureDate >= start && measureDate <= end;
    });

    setFilteredPatients(filtered);
    
    console.log('Time filtered', filteredPatients);
    dispatch(setFilteredReports(filtered));
  }, [reports, startTime, endTime]);

  return filteredPatients;
};

export default useFilteredPatientsByTime;
