import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import DashboardPage from "./pages/DashboardPage";
import DashboardReportPage from "./pages/DashboardReportPage";
import DashboardAboutPage from "./pages/DashboardAboutPage";

function App() {

  return (
    <>
       <Router>
        <Routes>
          <Route path="/" element={<Layout />} >
           <Route index element={<DashboardPage />} />
           <Route path="report" element={<DashboardReportPage />} />
           <Route path="about" element={<DashboardAboutPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
