// import logo from './logo.svg';
import "./App.css";
import { Routes, Route } from "react-router-dom";
import PureCounter from "@srexi/purecounterjs";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import NavPrc from "./components/NavPrc";
import Services from "./components/Services";
import HeroSection from "./components/HeroSection";
import MainSubServices from "./components/MainSubServices";
import About from "./components/About";
import Contact from "./components/Contact";
import Team from "./components/Team";
import Portfolio from "./components/Portfolio";

function App() {
  const counter1 = new PureCounter();

  return (
    <>
      <NavPrc />
      <div className="container-fluid manBox">
        <div className="row">
          <Sidebar />
          <div className="col-sm-10 scrollDiv">
            <main id="main">
              <br></br>
              <br></br>
              <br></br>
              <Routes>
                <Route path="/" element={<HeroSection />} />
                <Route path="/mainservices" element={<Services />} />
                <Route
                  path="/mainsubservices/:id"
                  element={<MainSubServices />}
                />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
