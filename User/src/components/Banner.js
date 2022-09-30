import { useEffect } from "react";
import { useState } from "react";
import server from "../Const";

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
    <div
      id="carouselExampleDark"
      class="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        {data.map((val, i) => {
          return (
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to={i}
              class={i === 0 ? "active" : ""}
              aria-current={i === 0 ? "true" : ""}
              aria-label={"Slide" + (i + 1)}
            ></button>
          );
        })}
      </div>
      <div class="carousel-inner">
        {data.map((val, i) => {
          return (
            <div
              className={i === 0 ? "carousel-item active" : "carousel-item "}
              data-bs-interval="2000"
            >
              <img src={val.banner_image} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>{val.banner_title}</h5>
                {/* <p>
                  Some representative placeholder content for the third slide.
                </p> */}
              </div>
            </div>
          );
        })}
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Banner;
