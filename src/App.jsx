import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./store/features/patientsReportSlice";
import Layout from "./pages/Layout";
import DashboardPage from "./pages/DashboardPage";
import DashboardReportPage from "./pages/DashboardReportPage";
import DashboardAboutPage from "./pages/DashboardAboutPage";
import SinglePatientReportPage from "./pages/SinglePatientReportPage";
import DashboardLoginPage from "./pages/DashboardLoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";

function App() {
  const dispatch = useDispatch();

  // Authentication state
  const { isAuthenticated } = useSelector((state) => state.Login); // Include a loading state in auth
  const { items, loading, error } = useSelector((state) => state.patientsReports);

  useEffect(() => {
    // Fetch data when the component mounts
    dispatch(fetchData());
  }, [dispatch]);

  // PrivateRoute component for protecting routes
  // const PrivateRoute = ({ children }) => {
 
  //   return isAuthenticated ? children : <Navigate to="/login" />;
  // };

  return (
    <Router>
      <Routes>
        {/* Public route */}
        <Route path="/login" element={<DashboardLoginPage />} />
        <Route path="/forget-password" element={<ForgotPasswordPage />} />

        {/* Protected routes */}
        <Route
          path="/"
          element={
            // <PrivateRoute>
              <Layout />
            // {/* </PrivateRoute> */}
          }
        >
          <Route index element={<DashboardPage />} />
          <Route path="report" element={<DashboardReportPage />} />
          <Route path="patient-report/:patientID" element={<SinglePatientReportPage />} />
          <Route path="about" element={<DashboardAboutPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
