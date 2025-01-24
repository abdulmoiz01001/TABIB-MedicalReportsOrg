import React, { useEffect } from 'react'
import HeadingComp from './DashboardCompnents/HeadingComp'
import DashboardStaticsComp from './DashboardCompnents/DashboardStaticsComp'
import { useNavigate } from 'react-router-dom'

const DashboardComp = () => {
  const navigate = useNavigate()
  useEffect(() => {
    console.log("token",localStorage.getItem("token"))
  localStorage.getItem("token") == undefined || localStorage.getItem("token") == null ? navigate("/login") : console.log("token is present")
  },[])
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