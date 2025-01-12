import React from 'react'
import GenderScoreChart from '../Charts/GenderScoreChart'

const AverageTABIATScoreMalesvsFemalesComp = () => {
    const maleScore = 70; // Replace with dynamic values
  const femaleScore = 80; // Replace with dynamic values

    return (
        <>
            <div className='w-full h-[217px] flex-col justify-center items-center p-4 bg-[#FAFAFA] flex  shadow-[0_4px_4px_3px_#FA6E6E40] rounded-[15px] ' >
            <h1 className='text-[0.625rem] font-bold text-black ' >Average TABIAT Score of Males vs Females</h1>
            <GenderScoreChart maleScore={maleScore} femaleScore={femaleScore} />
            </div>
        </>
    )
}

export default AverageTABIATScoreMalesvsFemalesComp