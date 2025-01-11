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

const DashboardStaticsComp = () => {
  return (
    <>
    <div className='w-full flex flex-row justify-start items-start mx-4 h-full  border-blue-900' >
      <div className='w-[75%] flex flex-col h-full  border-red-900 ' >
         <div className='w-full flex px-1 justify-evenly items-center h-[20%]  border-red-900' >
           <ReportBoxComp title={"Hypertensive"} count={"2091"} female={"1123"} male={"800"} /> 
           <ReportBoxComp title={"Total Test Reports"} count={"3942"}  /> 
           <PulseRateAndBloodPresureComp  />
           <ReportBoxComp title={"Test Report Year 2025"} count={"7042"}  /> 
           <ReportBoxComp title={"Test Report Month Jan"} count={"403"}  /> 
         </div>
         <div className='w-full flex px-1 flex-row justify-start items-start h-[80%]  border-yellow-300 ' >
           <div className='w-[26%] flex flex-col justify-between items-end h-full  border-red-900' >
            <HypertensionComp />
            <OtherTemperamentIndicesComp />

           </div>
           <div className='w-[36.5%] px-1 gap-1 flex flex-col justify-start items-start h-full  border-red-900' >
            <NoOfPatientsVsAgeComp />
            <TrendOfHypertensionComp />
            <TemperamentChartComp />
           </div>
           <div className='w-[37.5%] flex flex-col justify-center items-start h-full  border-red-900' >

           </div>
         </div>
      </div>
      <div className='w-[25%] h-full  flex flex-col gap-1 border-green-900' >
          <TemperamentCommunityComp />
          <DominantBodyCommunityComp />
          <TABIATScoreComp />
      </div>
    </div>
    </>
  )
}

export default DashboardStaticsComp