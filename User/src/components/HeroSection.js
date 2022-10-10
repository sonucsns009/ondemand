import { useEffect, useState } from "react";
import Banner from "./Banner";
import server from "../Const";
import StatsCounter from "./StatsCounter";
import PureCounter from "@srexi/purecounterjs";
import { Link } from "react-router-dom";
import OurServices from "./OurServices";
import About from "./About";
import Portfolio from "./Portfolio";
import Team from "./Team";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

const HeroSection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const d1 = await fetch(`${server}/api/v1/mainCategory/all/Category`);
    const res = await d1.json();
    setData(res);
  };
  const counter1 = new PureCounter();

  return (
    <>
      <section id="hero" className="hero">
        <div className="container position-relative">
          <div className="row gy-5" data-aos="fade-in">
            <Banner />
          </div>
        </div>
        <div className="icon-boxes position-relative">
          <div className="container position-relative">
            <div className="row gy-4 mt-5">
              {data.map((val) => {
                return (
                  <div
                    className="col-xl-3 col-md-6"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <div className="icon-box">
                      <div className="icon">
                        <i className="bi bi-easel"></i>
                      </div>
                      <h4 className="title">
                        <Link
                          to={`/mainsubservices/${val.category_id}`}
                          className="stretched-link"
                        >
                          {val.category_name}
                        </Link>
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <StatsCounter />
      <OurServices />
      <About />
      <Portfolio />
      <Team />
      <Testimonials />
      <Contact />
    </>
  );
};

export default HeroSection;
