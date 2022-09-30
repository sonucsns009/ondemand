// import '../../public/assets'
import PureCounter from "@srexi/purecounterjs";
import { useEffect, useState } from "react";
import React from "react";
import NavPrc from "./NavPrc";
import Sidebar from "./Sidebar";
import HeroSection from "./HeroSection";
import Services from "./Services";
import About from "./About";
import CallToAction from "./CallToAction";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import Team from "./Team";
import Pricing from "./Pricing";
import Faq from "./Faq";
import Contant from "./Contact";
import Footer from "./Footer";
import RecentPost from "./RecentPost";
import Main from "./Main";
import server from "../Server";

const Section = () => {
  const [data, setData] = useState([]);

  const counter1 = new PureCounter();

  console.log(data);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const d1 = await fetch(`${server}/api/v1/mainCategory/all/Category`);
    const res = await d1.json();
    setData(res);
  };

  return (
    <>
      <NavPrc />

      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <div className="col-sm-10 scrollDiv">
            <br />
            <br />
            <main id="main">
              <HeroSection />
              <Services />
              <About />
              <CallToAction />
              <Portfolio />
              <Testimonials />
              <Team />
              <Pricing />
              <Faq />
              <RecentPost />
              <Contant />
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Section;
