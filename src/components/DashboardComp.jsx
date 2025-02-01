import React, { useEffect } from 'react'
import HeadingComp from './DashboardCompnents/HeadingComp'
import DashboardStaticsComp from './DashboardCompnents/DashboardStaticsComp'
import { useNavigate } from 'react-router-dom'
import clsx from "clsx"

const DashboardComp = () => {
  const navigate = useNavigate()
  const containerClasses = clsx("w-full min-h-screen large-desktop:min-h-screen flex flex-col justify-start items-center")
  useEffect(() => {
  localStorage.getItem("token") == undefined || localStorage.getItem("token") == null && navigate("/login") 
  },[])
  return (
    <>
    <div className={containerClasses} >
      <HeadingComp />
      <DashboardStaticsComp />

    </div>
    </>
  )
}

export default DashboardComp