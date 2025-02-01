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
import clsx from "clsx"
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

  const containerClasses = clsx("mobile:w-[95%] mobile:py-2 tablet:py-2 desktop:w-[98%] large-desktop:w-[98%] large-desktop:h-auto mx-auto   laptop:w-[98%] tablet:w-[100vw] flex flex-row laptop:gap-3 tablet:flex-col mobile:flex-col tablet:justify-center tablet:items-center laptop:justify-between justify-start items-start h-[94%]")
  const skeletonContainerClasses = clsx("w-[77%] mobile:w-full flex flex-col h-full gap-3 laptop:pr-3 desktop:pr-3 justify-start items-end large-desktop:pr-4")
 
  const rowClasses = clsx(
    'desktop:w-[98%]', 
    'laptop:w-[98%]', 
    'large-desktop:w-[99%]', 
    'flex', 
    'justify-between', 
    'items-center', 
    'laptop:h-[15%]', 
    'h-[20%]'
  )

  const skeletonBoxClasses = clsx(
    'w-[18%]', 
    'h-full'
  )

  const flexRowContainerClasses = clsx(
    'desktop:w-[98%]', 
    'laptop:w-[98%]', 
    'large-desktop:w-[99%]', 
    'h-screen', 
    'flex', 
    'flex-row', 
    'justify-center', 
    'items-start', 
    'gap-2'
  )

  const leftColumnClasses = clsx(
    'w-[28%]', 
    'h-full', 
    'flex', 
    'flex-col', 
    'laptop:gap-2', 
    'gap-3'
  )

  const middleColumnClasses = clsx(
    'w-[35.5%]', 
    'h-full', 
    'px-1', 
    'flex', 
    'laptop:gap-2', 
    'gap-3', 
    'flex-col', 
    'justify-start', 
    'items-start'
  )

  const rightColumnClasses = clsx(
    'w-[36.5%]', 
    'h-full', 
    'flex', 
    'flex-col', 
    'laptop:gap-2', 
    'gap-3', 
    'justify-start', 
    'items-start'
  )

  const skeletonBoxSmallClasses = clsx(
    'w-full', 
    'h-[30%]'
  )

  const skeletonBoxLargeClasses = clsx(
    'w-full', 
    'h-[45%]'
  )

  const stickySidebarClasses = clsx(
    'w-[22%]', 
    'h-[96vh]', 
    'sticky', 
    'laptop:top-1', 
    'desktop:top-2', 
    'laptop:gap-2', 
    'large-desktop:top-2', 
    'pr-2', 
    'flex', 
    'flex-col', 
    'justify-start', 
    'items-center', 
    'gap-3'
  )

  const dashboardContainerClasses = clsx("desktop:w-[78%] large-desktop:w-[75%] large-desktop:h-[100%] tablet:w-full mobile:w-full  flex flex-col   h-full gap-3 laptop:pr-0 desktop:pr-3 tablet:justify-center justify-start laptop:justify-between  large-desktop:pr-4")
  const dashboardReportContainerClasses = clsx("tablet:w-full  mobile:w-full tablet:flex-wrap mobile:flex-wrap mobile:h-full tablet:h-full gap-3 flex justify-between items-center laptop:h-[15%] h-[20%]")
  const dashboardChartsContainerClasses = clsx("desktop:w-[100%] laptop:w-full large-desktop:h-[75vh]  tablet:overflow-auto tablet:flex-wrap mobile:flex-wrap tablet:h-full desktop:h-screen tablet:w-full  laptop:w-[98%] mb-2 large-desktop:w-[100%]  flex flex-row justify-center tablet:items-center items-start gap-2")
  const dashboardFirstChartsContainerClasses = clsx("w-[48%] large-desktop:w-[25%] large-desktop:h-[100%]  tablet:w-full mobile:w-full  desktop:w-[31%] h-full flex flex-col laptop:gap-3 gap-3")
  const dashboardSecondChartsContainerClasses = clsx("w-[48%] large-desktop:w-[40%] large-desktop:h-[100%]  tablet:w-full mobile:w-full  h-full px-1 flex laptop:gap-3 gap-3 flex-col justify-start items-start")
  const dashboardThirdChartsContainerClasses = clsx("w-[50%] large-desktop:w-[40%] large-desktop:h-[100%]  tablet:w-full mobile:w-full  desktop:w-[40%] h-full flex flex-col laptop:gap-3 gap-3 justify-start items-start")
  const dashboardTemperamentChartsContainerClasses = clsx("mobile:w-[100%] large-desktop:w-[25%] large-desktop:h-[90vh]  desktop:w-[23%]   border-red-900 tablet:w-full h-[96vh] desktop:sticky laptop:sticky large-desktop:sticky laptop:top-1 desktop:top-2 laptop:gap-2 large-desktop:top-2  flex flex-col justify-start items-center gap-3")
  return (
    <div className={containerClasses}>
      {loading || !analyticsData?.success ? (
        <>
        <div className={skeletonContainerClasses}>
          <div className={rowClasses}>
            <SkeletonBox className={skeletonBoxClasses} />
            <SkeletonBox className={skeletonBoxClasses} />
            <SkeletonBox className={skeletonBoxClasses} />
            <SkeletonBox className={skeletonBoxClasses} />
            <SkeletonBox className={skeletonBoxClasses} />
          </div>
          <div className={flexRowContainerClasses}>
            <div className={leftColumnClasses}>
              <SkeletonBox className={skeletonBoxLargeClasses} />
              <SkeletonBox className={skeletonBoxLargeClasses} />
            </div>
            <div className={middleColumnClasses}>
              <SkeletonBox className={skeletonBoxSmallClasses} />
              <SkeletonBox className={skeletonBoxSmallClasses} />
              <SkeletonBox className={skeletonBoxSmallClasses} />
            </div>
            <div className={rightColumnClasses}>
              <SkeletonBox className={skeletonBoxSmallClasses} />
              <SkeletonBox className={skeletonBoxSmallClasses} />
              <SkeletonBox className={skeletonBoxSmallClasses} />
            </div>
          </div>
        </div>
        <div className={stickySidebarClasses}>
          <SkeletonBox className={skeletonBoxSmallClasses} />
          <SkeletonBox className={skeletonBoxSmallClasses} />
          <SkeletonBox className={skeletonBoxSmallClasses} />
        </div>
      </>
      ) : (
        <>
          <div className={dashboardContainerClasses}>
          
            <div className={dashboardReportContainerClasses}>
              <ReportBoxComp title={"Total Test"} title2={"Reports"} data={analyticsData.data.totalReportsCount} />
              <ReportBoxComp data={analyticsData.data.hypertensive} title={"Hypertensive"} count={"2091"} female={"1123"} male={"800"} />
              <PulseRateAndBloodPresureComp data={analyticsData.data.pluseAndBpAverage} />
              <ReportBoxComp title={"Test Report "} title2={`Year ${getCurrentYear()}`} data={analyticsData.data.currentYearReportsCount} />
              <ReportBoxComp title={"Test Report "} title2={`Month ${getCurrentMonthName()}`} data={analyticsData.data.currentMonthReportsCount} />
            </div>
            <div className={dashboardChartsContainerClasses}>
              <div className={dashboardFirstChartsContainerClasses}>
                <HypertensionComp data={analyticsData.data.bmiClassification} />
                <OtherTemperamentIndicesComp reportsCounts={analyticsData.data.totalReportsCount} data={analyticsData.data.otherTemperamentIndices} />
              </div>
              <div className={dashboardSecondChartsContainerClasses}>
                <NoOfPatientsVsAgeComp totalCount={analyticsData.data.totalReportsCount} data={analyticsData.data.ageWiseDistributionOfHypertensiveAndNormotensivePatients} />
                <AgeWiseDistributionHeartRateComp data={analyticsData.data.ageWiseDistributionOfHeartRate} />
                <TemperamentChartComp data={analyticsData.data.temperamentWithDominantQualities} />
              </div>
              <div className={dashboardThirdChartsContainerClasses}>
                <PrevalenceOfHypertensionComp data={analyticsData.data.prevalenceOfHypertension} />
                <TrendOfHypertensionComp totalCount={analyticsData.data.totalReportsCount} data={analyticsData.data.monthlyTrendOfHypertension} />
                <AverageTABIATScoreMalesvsFemalesComp data={analyticsData?.data?.averageTabiatScoreOfrMaleAndFemale} />
              </div>
            </div>
          </div>
          <div className={dashboardTemperamentChartsContainerClasses}>
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
