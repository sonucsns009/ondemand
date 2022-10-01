import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import server from "../Const";

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
                        to={`/mainsubservices/${val.category_id}`}
                        data-gallery="portfolio-gallery-app"
                        class="glightbox"
                      >
                        <img src={val.service_image} class="img-fluid" alt="" />
                      </Link>
                      <div class="portfolio-info">
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
