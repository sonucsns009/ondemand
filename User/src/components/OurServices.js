import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import server from "../Const";

const OurServices = () => {
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
    <section id="services" class="portfolio sections-bg">
      <div class="container" data-aos="fade-up">
        <div class="section-header">
          <h2>Our Services</h2>
          <p>
            Quam sed id excepturi ccusantium dolorem ut quis dolores nisi llum
            nostrum enim velit qui ut et autem uia reprehenderit sunt deleniti
          </p>
        </div>

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
                      <img src={val.category_image} class="img-fluid" alt="" />
                    </Link>
                    <div class="portfolio-info">
                      <h4>
                        <Link
                          to={`/mainsubservices/${val.category_id}`}
                          title="More Details"
                        >
                          {val.category_name}
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
  );
};

export default OurServices;
