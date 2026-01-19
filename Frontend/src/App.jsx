import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Doctor from "./components/Doctor";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Appointment from "./components/Appointment";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="*" element={<Home />}/>
        <Route path="/about" element={<About/>} />
        <Route path="/doctors" element={<Doctor/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
