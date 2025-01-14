import React from 'react'
import DynamicDoughnutChart from '../Charts/SingleDoughnutChart'
import PieCharts from '../Charts/PieCharts'

const PrevalenceOfHypertensionComp = () => {
    return (
        <>
            <div className='w-full h-[193px]  bg-[#FAFAFA] flex  shadow-[0_4px_4px_3px_#FA6E6E40] rounded-[15px] ' >
                <div className='w-[50%] flex-col flex  border-red-900 justify-start  items-center h-full ' >
                    <h1 className='text-[0.625rem]  mt-2 font-bold' >Prevalence of Hypertension</h1>
                    <DynamicDoughnutChart
                        value={88}
                        showCenterValue={false}
                        showSegmentLines={true}
                        lay={{
                            top: 30,
                            bottom: 30,
                            left: 30,
                            right: 30,
                          }}
                          
                    />
                </div>
                <div className='w-[50%] flex flex-col justify-center items-center h-full gap-4' >
                    {/* First Chart */}
                    <PieCharts firstValue={75} firstColor="#CC0001" secondColor="#FFB1B1" title="In Males" />

                    {/* Second Chart */}
                    <PieCharts firstValue={45.5} firstColor="#CC0001" secondColor="#FFB1B1" title="In Females" />

                    {/* { title: 'One', value: firstValue, color: '#FF0000' },
                    { title: 'Two', value: secondValue, color: '#FFCCCC' }, */}

                </div>

            </div>
        </>
    )
}

export default PrevalenceOfHypertensionComp