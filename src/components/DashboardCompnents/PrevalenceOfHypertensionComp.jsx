import React from 'react'
import DynamicDoughnutChart from '../Charts/SingleDoughnutChart'
import PieCharts from '../Charts/PieCharts'
import { useMediaQuery } from 'react-responsive';

const PrevalenceOfHypertensionComp = () => {
    const isLargeDesktop = useMediaQuery({ minWidth: 2560 });      // 2xl
    return (
        <>
            <div className='w-full h-[30%]  bg-[#FAFAFA] flex  border border-[#CC0001] rounded-[15px] ' >
                <div className='w-[50%] flex-col flex  border-red-900 justify-center  items-center h-full ' >
                    <h1 className='desktop:text-[1rem] large-desktop:text-[2.5rem] font-bold' >Prevalence of Hypertension</h1>
                    <div className='w-full flex justify-center items-center h-[85%]' >


                    <DynamicDoughnutChart
                        value={88}
                        showCenterValue={false}
                        showSegmentLines={true}
                        lay={{
                            top: 30,
                            bottom: 30,
                            left: isLargeDesktop ? 70 : 40 ,
                            right: isLargeDesktop ? 70 : 40,
                        }}
                        
                        />
                        </div>
                </div>
                <div className='w-[50%] flex flex-col justify-center items-center h-full gap-2' >
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