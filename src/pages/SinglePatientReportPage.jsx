import React from 'react'
import { useParams } from 'react-router-dom'

const SinglePatientReportPage = () => {
  const { patientID } = useParams()
  return (
    <div>Patient ID : {patientID}</div>
  )
}

export default SinglePatientReportPage