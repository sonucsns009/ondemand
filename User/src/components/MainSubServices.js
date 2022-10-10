import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import server from "../Const";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

const MainSubServices = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [id1, setID] = useState(id);
  useEffect(() => {
    setID(id);
    getData();
  }, []);

  const getData = async () => {
    const d1 = await fetch(
      `${server}/api/v1/mainSubCategory/allSubCategory/${id1}`
    );
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
                  src={val.subcategory_image}
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>{val.subcategory_name}</h5>
                  {/* <p>
                     Some representative placeholder content for the third slide.
                   </p> */}
                </div>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
      <section id="services" class="portfolio sections-bg">
        <div class="container" data-aos="fade-up">
          {/* <div class="section-header">
          <h2>Our Services</h2>
          <p>
            Quam sed id excepturi ccusantium dolorem ut quis dolores nisi llum
            nostrum enim velit qui ut et autem uia reprehenderit sunt deleniti
          </p>
        </div> */}

          <div
            class="portfolio-isotope"
            data-portfolio-filter="*"
            data-portfolio-layout="masonry"
            data-portfolio-sort="original-order"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="row gy-4 portfolio-container">
              {data.map((val) => {
                return (
                  <div class="col-xl-4 col-md-6 portfolio-item filter-product">
                    <div class="portfolio-wrap">
                      <Link
                        to={`/services/${val.subcategory_id}`}
                        data-gallery="portfolio-gallery-app"
                        class="glightbox"
                      >
                        <img
                          src={val.subcategory_image}
                          class="img-fluid"
                          alt=""
                        />
                      </Link>
                      <div class="portfolio-info">
                        <h4>
                          <Link
                            to={`/services/${val.subcategory_id}`}
                            title="More Details"
                          >
                            {val.subcategory_name}
                          </Link>
                        </h4>
                        <p>Lorem ipsum, dolor sit amet consectetur</p>
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

export default MainSubServices;
