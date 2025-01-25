import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDashboardAnalytics, clearAnalyticsData } from '../../store/features/dashboardPatientsDetailsSlice';
import ReportBoxComp from './ReportBoxComp';
import PulseRateAndBloodPresureComp from './PulseRateAndBloodPresureComp';
import HypertensionComp from './HypertensionComp';
import OtherTemperamentIndicesComp from './OtherTemperamentIndicesComp';
import NoOfPatientsVsAgeComp from './NoOfPatientsVsAgeComp';
import TrendOfHypertensionComp from './TrendOfHypertensionComp';
import TemperamentChartComp from './TemperamentChartComp';
import TemperamentCommunityComp from './TemperamentCommunityComp';
import DominantBodyCommunityComp from './DominantBodyCommunityComp';
import TABIATScoreComp from './TABIATScoreComp';
import PrevalenceOfHypertensionComp from './PrevalenceOfHypertensionComp';
import AverageTABIATScoreMalesvsFemalesComp from './AverageTABIATScoreMalesvsFemalesComp';
import AgeWiseDistributionHeartRateComp from './AgeWiseDistributionHeartRateComp';

const SkeletonBox = ({ className }) => (
  <div className={`animate-pulse bg-gray-300 rounded-lg ${className}`}></div>
);

const DashboardStaticsComp = () => {
  const dispatch = useDispatch();

  const { analyticsData, loading } = useSelector(
    (state) => state.dashboardPatientsAnalytics
  );

  useEffect(() => {
   console.log("data" , analyticsData)
  },[analyticsData])

  function getCurrentYear() {
    return new Date().getFullYear();
  }
  function getCurrentMonthName() {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return monthNames[new Date().getMonth()];
  }

  useEffect(() => {
    dispatch(fetchDashboardAnalytics());

    return () => {
      dispatch(clearAnalyticsData());
    };
  }, [dispatch]);

  return (
    <div className="desktop:w-[98%] large-desktop:w-[98%] mx-auto  border-red-900 laptop:w-[98%] tablet:w-[100vw] flex flex-row laptop:gap-3 tablet:flex-col mobile:flex-col tablet:justify-center tablet:items-center laptop:justify-between justify-start items-start h-[94%]">
      {loading || !analyticsData?.success ? (
        <>
          <div className="w-[77%] flex flex-col h-full gap-3 laptop:pr-3 desktop:pr-3 justify-start items-end large-desktop:pr-4">
            <div className="desktop:w-[98%] laptop:w-[98%] large-desktop:w-[99%] flex justify-between items-center laptop:h-[15%] h-[20%]">
              <SkeletonBox className="w-[18%] h-full" />
              <SkeletonBox className="w-[18%] h-full" />
              <SkeletonBox className="w-[18%] h-full" />
              <SkeletonBox className="w-[18%] h-full" />
              <SkeletonBox className="w-[18%] h-full" />
            </div>
            <div className="desktop:w-[98%] laptop:w-[98%] large-desktop:w-[99%] h-screen flex flex-row justify-center items-start gap-2">
              <div className="w-[28%] h-full flex flex-col laptop:gap-2 gap-3">
                <SkeletonBox className="w-full h-[45%]" />
                <SkeletonBox className="w-full h-[45%]" />
              </div>
              <div className="w-[35.5%] h-full px-1 flex laptop:gap-2 gap-3 flex-col justify-start items-start">
                <SkeletonBox className="w-full h-[30%]" />
                <SkeletonBox className="w-full h-[30%]" />
                <SkeletonBox className="w-full h-[30%]" />
              </div>
              <div className="w-[36.5%] h-full flex flex-col laptop:gap-2 gap-3 justify-start items-start">
                <SkeletonBox className="w-full h-[30%]" />
                <SkeletonBox className="w-full h-[30%]" />
                <SkeletonBox className="w-full h-[30%]" />
              </div>
            </div>
          </div>
          <div className="w-[22%] h-[96vh] sticky laptop:top-1 desktop:top-2 laptop:gap-2 large-desktop:top-2 pr-2 flex flex-col justify-start items-center gap-3">
            <SkeletonBox className="w-full h-[30%]" />
            <SkeletonBox className="w-full h-[30%]" />
            <SkeletonBox className="w-full h-[30%]" />
          </div>
        </>
      ) : (
        <>
          <div className="desktop:w-[78%] large-desktop:w-[77%] border-2 border-red-900 tablet:w-full mobile:w-full  flex flex-col   h-full gap-3 laptop:pr-0 desktop:pr-3 tablet:justify-center justify-start laptop:justify-between  large-desktop:pr-4">
            {/* <div className="desktop:w-[98%] tablet:w-[98%] tablet:flex-wrap tablet:h-full laptop:w-[98%] large-desktop:w-[99%] flex justify-between items-center laptop:h-[15%] h-[20%]">
              <ReportBoxComp data={analyticsData.data.hypertensive} title={"Hypertensive"} count={"2091"} female={"1123"} male={"800"} />
              <ReportBoxComp title={"Total Test"} title2={"Reports"} data={analyticsData.data.totalReportsCount} />
              <PulseRateAndBloodPresureComp data={analyticsData.data.pluseAndBpAverage} />
              <ReportBoxComp title={"Test Report "} title2={`Year ${getCurrentYear()}`} data={analyticsData.data.currentYearReportsCount} />
              <ReportBoxComp title={"Test Report "} title2={`Month ${getCurrentMonthName()}`} data={analyticsData.data.currentMonthReportsCount} />
            </div> */}
            <div className="tablet:w-full mobile:w-full tablet:flex-wrap mobile:flex-wrap mobile:h-full tablet:h-full gap-3 flex justify-between items-center laptop:h-[15%] h-[20%]">
              <ReportBoxComp data={analyticsData.data.hypertensive} title={"Hypertensive"} count={"2091"} female={"1123"} male={"800"} />
              <ReportBoxComp title={"Total Test"} title2={"Reports"} data={analyticsData.data.totalReportsCount} />
              <PulseRateAndBloodPresureComp data={analyticsData.data.pluseAndBpAverage} />
              <ReportBoxComp title={"Test Report "} title2={`Year ${getCurrentYear()}`} data={analyticsData.data.currentYearReportsCount} />
              <ReportBoxComp title={"Test Report "} title2={`Month ${getCurrentMonthName()}`} data={analyticsData.data.currentMonthReportsCount} />
            </div>
            <div className="desktop:w-[100%] laptop:w-full  border-green-900 tablet:overflow-auto tablet:flex-wrap mobile:flex-wrap tablet:h-full tablet:w-full  laptop:w-[98%] mb-2 large-desktop:w-[99%]  flex flex-row justify-center tablet:items-center items-start gap-2">
              <div className="w-[48%] tablet:w-full mobile:w-full  desktop:w-[31%] h-full flex flex-col laptop:gap-3 gap-3">
                <HypertensionComp data={analyticsData.data.bmiClassification} />
                <OtherTemperamentIndicesComp data={analyticsData.data.otherTemperamentIndices} />
              </div>
              <div className="w-[48%] tablet:w-full mobile:w-full   border-red-900 h-full px-1 flex laptop:gap-3 gap-3 flex-col justify-start items-start">
                <NoOfPatientsVsAgeComp totalCount={analyticsData.data.totalReportsCount} data={analyticsData.data.ageWiseDistributionOfHypertensiveAndNormotensivePatients} />
                <AgeWiseDistributionHeartRateComp data={analyticsData.data.ageWiseDistributionOfHeartRate} />
                <TemperamentChartComp data={analyticsData.data.temperamentWithDominantQualities} />
              </div>
              <div className="w-[50%] tablet:w-full mobile:w-full   border-red-900 desktop:w-[40%] h-full flex flex-col laptop:gap-3 gap-3 justify-start items-start">
                <PrevalenceOfHypertensionComp data={analyticsData.data.prevalenceOfHypertension} />
                <TrendOfHypertensionComp data={analyticsData.data.monthlyTrendOfHypertension} />
                <AverageTABIATScoreMalesvsFemalesComp data={analyticsData?.data?.averageTabiatScoreOfrMaleAndFemale} />
              </div>
            </div>
          </div>
          <div className="mobile-w[100%] desktop:w-[23%] border-2  border-red-900 tablet:w-full h-[96vh] sticky laptop:top-1 desktop:top-2 laptop:gap-2 large-desktop:top-2  flex flex-col justify-start items-center gap-3">
            <TemperamentCommunityComp data={analyticsData.data.temperamentOfTheCommunity} />
            <DominantBodyCommunityComp data={analyticsData.data.dominantBodyCompositionInCommunity} />
            <TABIATScoreComp data={analyticsData?.data?.totalAverageTabiatScore} />
          </div>
        </>
      )}
    </div>
  );
};

export default DashboardStaticsComp;
