import React from 'react'
import BodyTypeLayout from '../Charts/BodyTypeLayout'

const DominantBodyCommunityComp = ({data}) => {
    return (
        <>
            <div className='w-full mobile:h-[50%] h-[39%] mobile:m-4 pb-4 bg-[#FAFAFA] border border-[#CC0001] rounded-[15px] ' >
              <h1 className='desktop:text-[0.9rem] laptop:text-[0.7rem] large-desktop:text-[2.2rem] font-bold text-black text-center py-2' >Dominant Body Composition in Community</h1>
             <BodyTypeLayout details={data} />
            </div>
        </>
    )
}

export default DominantBodyCommunityComp