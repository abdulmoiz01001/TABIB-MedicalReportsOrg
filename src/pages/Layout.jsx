import React from 'react'
import DashboardSideBarComp from '../components/DashboardSideBarComp'
import { Outlet } from 'react-router-dom'
import clsx from "clsx"

const Layout = () => {
  const containerClasses = clsx('flex justify-start items-start flex-nowrap w-full h-screen ')
  return (
    <>
    <div className={containerClasses} >
     <DashboardSideBarComp />
     <Outlet />
    </div>
    </>
  )
}

export default Layout