import React from 'react'
import BodyTypeLayout from '../Charts/BodyTypeLayout'

const DominantBodyCommunityComp = ({data}) => {
    return (
        <>
            <div className='w-full mobile:h-[50%]  h-[39%]  pb-4 bg-[#FAFAFA] border border-[#CC0001] rounded-[15px] ' >
              <h1 className='desktop:text-[0.9rem] mobile:text-[0.7rem] tablet:text-[0.7rem] laptop:text-[0.7rem] large-desktop:text-[1.5rem] font-bold text-black text-center py-2' >Dominant Body Type in the Community</h1>
              <BodyTypeLayout details={data} />
            </div>
        </>
    )
}

export default DominantBodyCommunityComp