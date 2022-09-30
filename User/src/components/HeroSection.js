import { useEffect, useState } from "react";
import Banner from "./Banner";
import server from "../Const";
import StatsCounter from "./StatsCounter";
import PureCounter from "@srexi/purecounterjs";
import { Link } from "react-router-dom";

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
      <section id="hero" class="hero">
        <div class="container position-relative">
          <div class="row gy-5" data-aos="fade-in">
            <Banner />
          </div>
        </div>
        <div class="icon-boxes position-relative">
          <div class="container position-relative">
            <div class="row gy-4 mt-5">
              {data.map((val) => {
                return (
                  <div
                    class="col-xl-3 col-md-6"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <div class="icon-box">
                      <div class="icon">
                        <i class="bi bi-easel"></i>
                      </div>
                      <h4 class="title">
                        <Link
                          to={`/mainsubservices/${val.category_id}`}
                          class="stretched-link"
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
    </>
  );
};

export default HeroSection;
