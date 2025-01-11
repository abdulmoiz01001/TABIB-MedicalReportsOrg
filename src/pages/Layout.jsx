import React from 'react'
import DashboardSideBarComp from '../components/DashboardSideBarComp'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <div className=' flex justify-start items-start flex-nowrap w-full h-screen ' >
     <DashboardSideBarComp />
     <Outlet />
    </div>
    </>
  )
}

export default Layout