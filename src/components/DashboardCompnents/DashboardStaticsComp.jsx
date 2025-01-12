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
    <div className='w-full flex flex-row justify-start p-2 items-start min-h-full  border-blue-900' >
      <div className='w-[75%] flex flex-col min-h-full gap-2 justify-center items-center  border-red-900 ' >
         <div className='w-full flex px-1 justify-evenly items-center h-[20%]  border-red-900' >
           <ReportBoxComp title={"Hypertensive"} count={"2091"} female={"1123"} male={"800"} /> 
           <ReportBoxComp title={"Total Test Reports"} count={"3942"}  /> 
           <PulseRateAndBloodPresureComp  />
           <ReportBoxComp title={"Test Report Year 2025"} count={"7042"}  /> 
           <ReportBoxComp title={"Test Report Month Jan"} count={"403"}  /> 
         </div>
         <div className='w-full border-2 px-3 flex flex-row justify-center items-start gap-2   border-yellow-300 ' >
           <div className='w-[28%] h-[800px]  flex flex-col gap-3    border-red-900' >
            <HypertensionComp />
            <OtherTemperamentIndicesComp />

           </div>
           <div className='w-[35.5%] h-[800px] px-1  flex gap-3 flex-col justify-start items-start   border-red-900' >
            <NoOfPatientsVsAgeComp />
            <TrendOfHypertensionComp />
            <TemperamentChartComp />
           </div>
           <div className='w-[36.5%] h-[800px] flex flex-col gap-3 justify-start items-start   border-red-900' >
            <PrevalenceOfHypertensionComp />
            <AgeWiseDistributionHeartRateComp />
            <AverageTABIATScoreMalesvsFemalesComp />
           </div>
         </div>
      </div>
      <div className='w-[24%] h-[800px] border-2  flex flex-col justify-start items-center gap-2 border-green-900' >
          <TemperamentCommunityComp />
          <DominantBodyCommunityComp />
          <TABIATScoreComp />
      </div>
    </div>
    
    </>
  )
}

export default DashboardStaticsComp