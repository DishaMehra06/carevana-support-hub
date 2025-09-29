import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Banner from "./components/banner/Banner";
import Doctors from "./components/doctors/Doctors";
import Facilities from "./components/facilities/Facilities";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Partners from "./components/partners/Partners";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";
import AzureScan from "./components/azure1/AzureScan"; // 👈 import your Azure Scan component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Default Home Page */}
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Services />
              <Doctors />
              <Partners />
              <Facilities />
              <Testimonials />
              <Footer />
            </>
          }
        />

        {/* Azure Scan Page */}
        <Route path="/azure-scan" element={<AzureScan />} />
      </Routes>
    </Router>
  );
}

export default App;

