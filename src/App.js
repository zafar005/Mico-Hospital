import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUsPage from "./pages/aboutuspage";
import ContactUsPage from "./pages/contactuspage";
import DoctorPage from "./pages/doctorspage";
import Homepage from "./pages/homepage";
import TreatmentPage from "./pages/treatement";
import LoginPage from "./pages/loginpage";
import SignUpPage from "./pages/signuppage";
import DashbordPage from "./pages/doctorsdashbord";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/about" element={<AboutUsPage/>} />
        <Route path="/treatment" element={<TreatmentPage/>} />
        <Route path="/doctors" element={<DoctorPage/>} />
        <Route path="/contact" element={<ContactUsPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/dashbord" element={<DashbordPage/>} />

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
