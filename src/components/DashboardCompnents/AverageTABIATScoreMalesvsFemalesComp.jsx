import React from 'react'

const AverageTABIATScoreMalesvsFemalesComp = () => {
    const maleScore = 70; // Replace with dynamic values
    const femaleScore = 80; // Replace with dynamic values

    return (
        <>
            <div className='w-full h-[217px] flex-col justify-center items-center p-4 bg-[#FAFAFA] flex  shadow-[0_4px_4px_3px_#FA6E6E40] rounded-[15px] ' >
                <h1 className='text-[0.625rem] font-bold text-black ' >Average TABIAT Score of Males vs Females</h1>
                <div className='flex h-[90%] justify-evenly items-center' >
                    <div className='h-full w-[20px] flex flex-col-reverse justify-center gap-1 items-center' >
                       <span className="text-[8px]" >0 </span>
                       <span className="text-[8px]" >2</span>
                       <span className="text-[8px]" >3</span>
                       <span className="text-[8px]" >4</span>
                       <span className="text-[8px]" >5</span>
                       <span className="text-[8px]" >6</span>
                       <span className="text-[8px]" >7</span>
                       <span className="text-[8px]" >8</span>
                       <span className="text-[8px]" >9</span>
                       <span className="text-[8px]" >10</span>
                    </div>
                    <img src='male.svg' alt='image' />
                    <img src='line.svg' alt='image' />
                    <img src='female.svg' alt='image' />
                </div>
            </div>
        </>
    )
}

export default AverageTABIATScoreMalesvsFemalesComp