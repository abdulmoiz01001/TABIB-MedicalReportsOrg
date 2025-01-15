import React from 'react'
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

const DashboardStaticsComp = () => {
  return (
    <>
    <div className='w-full flex flex-row justify-start items-start  h-[94%] ' >
      <div className='w-[80%]  flex flex-col h-full gap-2 justify-start items-center   ' >
         <div className='w-full  border-red-900 flex px-1 justify-evenly items-center h-[20%] ' >
           <ReportBoxComp title={"Hypertensive"} count={"2091"} female={"1123"} male={"800"} /> 
           <ReportBoxComp title={"Total Test"} title2={"Reports"} count={"3942"}  /> 
           <PulseRateAndBloodPresureComp  />
           <ReportBoxComp title={"Test Report "} title2={"Year 2025"} count={"7042"}  /> 
           <ReportBoxComp title={"Test Report "} title2={"Month Jan"} count={"403"}  /> 
         </div>
         <div className='w-full px-3 h-[80%]  border-red-900 flex flex-row justify-center items-start gap-2   ' >
           <div className='w-[28%] h-full  flex flex-col gap-3    ' >
            <HypertensionComp />
            <OtherTemperamentIndicesComp />

           </div>
           <div className='w-[35.5%] h-full  border-red-900 px-1  flex gap-3 flex-col justify-start items-start  ' >
            <NoOfPatientsVsAgeComp />
            <AgeWiseDistributionHeartRateComp />
            <TemperamentChartComp />
           </div>
           <div className='w-[36.5%] h-full  border-red-900 flex flex-col gap-3 justify-start items-start  ' >
            <PrevalenceOfHypertensionComp />
             <TrendOfHypertensionComp />
            <AverageTABIATScoreMalesvsFemalesComp />
           </div>
         </div>
      </div>
      <div className='w-[20%] h-full pr-3  flex flex-col justify-start items-center gap-2 ' >
          <TemperamentCommunityComp />
          <DominantBodyCommunityComp />
          <TABIATScoreComp />
      </div>
    </div>
    
    </>
  )
}

export default DashboardStaticsComp