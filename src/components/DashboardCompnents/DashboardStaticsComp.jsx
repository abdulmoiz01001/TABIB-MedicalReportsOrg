import React, { useEffect } from 'react';
import ReportBoxComp from './ReportBoxComp'
import PulseRateAndBloodPresureComp from './PulseRateAndBloodPresureComp'
import HypertensionComp from './HypertensionComp'
import OtherTemperamentIndicesComp from './OtherTemperamentIndicesComp'
import NoOfPatientsVsAgeComp from './NoOfPatientsVsAgeComp'
import TrendOfHypertensionComp from './TrendOfHypertensionComp'
import TemperamentChartComp from './TemperamentChartComp'
import TemperamentCommunityComp from './TemperamentCommunityComp'
import DominantBodyCommunityComp from './DominantBodyCommunityComp'
import TABIATScoreComp from './TABIATScoreComp'
import PrevalenceOfHypertensionComp from './PrevalenceOfHypertensionComp'
import AverageTABIATScoreMalesvsFemalesComp from './AverageTABIATScoreMalesvsFemalesComp'
import AgeWiseDistributionHeartRateComp from './AgeWiseDistributionHeartRateComp'
import { useDispatch, useSelector } from 'react-redux';
import { fetchDashboardAnalytics, clearAnalyticsData } from '../../store/features/dashboardPatientsDetailsSlice';



const DashboardStaticsComp = () => {
  const dispatch = useDispatch();

  const { analyticsData, loading, error } = useSelector(
    (state) => state.dashboardPatientsAnalytics
  );

  useEffect(() => {
    console.log(analyticsData)
  }, [analyticsData])

  useEffect(() => {
    dispatch(fetchDashboardAnalytics());

    // Optional: clear data when component unmounts
    return () => {
      dispatch(clearAnalyticsData());
    };
  }, [dispatch]);

  return (
    <>
      <div className='w-full flex flex-row justify-start items-start  h-[94%] ' >
        {
          analyticsData.success && <>
            <div className='w-[78% flex flex-col h-full gap-2 justify-start items-center   ' >
              <div className='desktop:w-[98%] large-desktop:w-[99%] flex  justify-between items-center h-[20%] ' >
                <ReportBoxComp data={analyticsData.data.hypertensive} title={"Hypertensive"} count={"2091"} female={"1123"} male={"800"} />
                <ReportBoxComp title={"Total Test"} title2={"Reports"} count={"3942"} />
                <PulseRateAndBloodPresureComp data={analyticsData.data.pluseAndBpAverage} />
                <ReportBoxComp title={"Test Report "} title2={"Year 2025"} count={"7042"} />
                <ReportBoxComp title={"Test Report "} title2={"Month Jan"} count={"403"} />
              </div>
              <div className='desktop:w-[98%]  large-desktop:w-[99%]  h-screen  flex flex-row justify-center items-start gap-2   ' >
                <div className='w-[28%]  h-full flex flex-col gap-3    ' >
                  <HypertensionComp data={analyticsData.data.bmiClassification} />
                  <OtherTemperamentIndicesComp  />

                </div>
                <div className='w-[35.5%] h-full px-1  flex gap-3 flex-col justify-start items-start  ' >
                  <NoOfPatientsVsAgeComp />
                  <AgeWiseDistributionHeartRateComp />
                  <TemperamentChartComp />
                </div>
                <div className='w-[36.5%] h-full  flex flex-col gap-3 justify-start items-start  ' >
                  <PrevalenceOfHypertensionComp data={analyticsData.data.prevalenceOfHypertension} />
                  <TrendOfHypertensionComp />
                  <AverageTABIATScoreMalesvsFemalesComp />
                </div>
              </div>
            </div>
            <div className='w-[22%] h-[96vh] sticky top-10  pr-2 flex flex-col justify-start items-center gap-2 ' >
              <TemperamentCommunityComp />
              <DominantBodyCommunityComp />
              <TABIATScoreComp />
            </div>
          </>
        }

      </div>

    </>
  )
}

export default DashboardStaticsComp