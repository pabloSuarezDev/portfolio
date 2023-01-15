import { Routes, Route } from "react-router-dom";
import HeaderNav from "./components/Layout/HeaderNav";
import Footer from "./components/Layout/Footer";
import LandingPage from "./components/LandingPage";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Curriculum from "./components/Curriculum";
import Contact from "./components/Contact";
import Project from "./components/Project";

function App() {
  return (
    <>
      {/* HEADER AND NAVIGATION */}
      <HeaderNav />
      {/* MAIN CONTENT (BY ROUTES) */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/portafolio" element={<Portfolio />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/proyecto/:id" element={<Project />} />
        <Route path="*" element={<h1 className="heading">Error 404</h1>} />
      </Routes>
      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default App;