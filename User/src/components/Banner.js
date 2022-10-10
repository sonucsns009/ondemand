import { useEffect } from "react";
import { useState } from "react";
import server from "../Const";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

const Banner = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const d1 = await fetch(`${server}/api/v1/banner`);
    const res = await d1.json();
    console.log(res);
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
                  src={val.banner_image}
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>{val.banner_title}</h5>
                  {/* <p>
                     Some representative placeholder content for the third slide.
                   </p> */}
                </div>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </>
  );
};

export default Banner;
