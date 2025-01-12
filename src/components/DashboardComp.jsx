import React from 'react'
import HeadingComp from './DashboardCompnents/HeadingComp'
import DashboardStaticsComp from './DashboardCompnents/DashboardStaticsComp'

const DashboardComp = () => {
  return (
    <>
    <div className='w-full min-h-screen flex flex-col justify-start items-center border-2 border-red-900' >
      <HeadingComp />
      <DashboardStaticsComp />

    </div>
    </>
  )
}

export default DashboardComp