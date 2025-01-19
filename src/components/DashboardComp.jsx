import React from 'react'
import HeadingComp from './DashboardCompnents/HeadingComp'
import DashboardStaticsComp from './DashboardCompnents/DashboardStaticsComp'

const DashboardComp = () => {
  return (
    <>
    <div className='w-full min-h-screen large-desktop:min-h-screen flex flex-col justify-start items-center' >
      <HeadingComp />
      <DashboardStaticsComp />

    </div>
    </>
  )
}

export default DashboardComp