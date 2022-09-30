import { useEffect, useState } from "react";
import Banner from "./Banner";
import server from "../Const";

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

  return (
    <>
      <section id="hero" class="hero">
        <div class="container position-relative">
          <div class="row gy-5" data-aos="fade-in">
            {/* <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
              <h2>
                Welcome to <span>OnDemand</span>
              </h2>
              <p>
                Sed autem laudantium dolores. Voluptatem itaque ea consequatur
                eveniet. Eum quas beatae cumque eum quaerat.
              </p>
              <div class="d-flex justify-content-center justify-content-lg-start">
                <a href="#about" class="btn-get-started">
                  Get Started
                </a>
                <a
                  href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                  class="glightbox btn-watch-video d-flex align-items-center"
                >
                  <i class="bi bi-play-circle"></i>
                  <span>Watch Video</span>
                </a>
              </div>
            </div>
            <div class="col-lg-6 order-1 order-lg-2">
              <img
                src="assets/img/hero-img.svg"
                class="img-fluid"
                alt=""
                data-aos="zoom-out"
                data-aos-delay="100"
              />
            </div> */}
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
                        <a href="" class="stretched-link">
                          {val.category_name}
                        </a>
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* </div> */}
      </section>
    </>
  );
};

export default HeroSection;
