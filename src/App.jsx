import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import React , { useEffect } from "react"
import DashboardPage from "./pages/DashboardPage";
import DashboardReportPage from "./pages/DashboardReportPage";
import DashboardAboutPage from "./pages/DashboardAboutPage";
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from "./store/features/patientsReportSlice"
import SinglePatientReportPage from "./pages/SinglePatientReportPage";

function App() {

  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.patientsReports); // when ever i want data it will be in items

  useEffect(() => {
    console.log('App component mounted');
    console.log(items)
  },[items])

  useEffect(() => {
    // Fetch data when the component mounts
    dispatch(fetchData());
  }, [dispatch]);


  return (
    <>
       <Router>
        <Routes>
          <Route path="/" element={<Layout />} >
           <Route index element={<DashboardPage />} />
           <Route path="report" element={<DashboardReportPage />} />
           <Route path="patient-report/:patientID" element={<SinglePatientReportPage />} />
           <Route path="about" element={<DashboardAboutPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
