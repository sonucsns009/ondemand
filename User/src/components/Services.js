import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import server from "../Const";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

const Services = () => {
  const [data, setData] = useState([]);

  const { id } = useParams();
  console.warn(data, id);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const d1 = await fetch(`${server}/api/v1/services/findByIdServ/${id}`);
    const res = await d1.json();
    setData(res);
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((val, index) => {
          return (
            <>
              <SwiperSlide className="SwipSlid">
                <img
                  src={val.service_image}
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>{val.service_title}</h5>
                  {/* <p>
                     Some representative placeholder content for the third slide.
                   </p> */}
                </div>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
      <section id="services" className="portfolio sections-bg">
        <div className="container" data-aos="fade-up">
          {/* <div className="section-header">
            <h2>Our Services</h2>
            <p>
              Quam sed id excepturi ccusantium dolorem ut quis dolores nisi llum
              nostrum enim velit qui ut et autem uia reprehenderit sunt deleniti
            </p>
          </div> */}

          <div
            className="portfolio-isotope"
            data-portfolio-filter="*"
            data-portfolio-layout="masonry"
            data-portfolio-sort="original-order"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="row gy-4 portfolio-container">
              {data.map((val) => {
                return (
                  <div className="col-xl-4 col-md-6 portfolio-item filter-product">
                    <div className="portfolio-wrap">
                      <Link
                        to={`/mainsubservices/${val.category_id}`}
                        data-gallery="portfolio-gallery-app"
                        className="glightbox"
                      >
                        <img
                          src={val.service_image}
                          className="img-fluid"
                          alt=""
                        />
                      </Link>
                      <div className="portfolio-info">
                        <h4>
                          <Link
                            to={`/mainsubservices/${val.category_id}`}
                            title="More Details"
                          >
                            {val.service_name}
                          </Link>
                        </h4>
                        <p>{val.service_desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
