import { useEffect, useState } from "react";
import server from "../Server";

const Services = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const d1 = await fetch(`${server}api/v1/mainCategory/all/Category`);
    const res = await d1.json();
    setData(res);
  };

  return (
    <main id="main">
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
            {/* <div>
              <ul class="portfolio-flters">
                <li data-filter="*" class="filter-active">
                  All
                </li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-product">Product</li>
                <li data-filter=".filter-branding">Branding</li>
                <li data-filter=".filter-books">Books</li>
              </ul>
            </div> */}

            <div class="row gy-4 portfolio-container">
              {data.map((val) => {
                return (
                  <div class="col-xl-4 col-md-6 portfolio-item filter-product">
                    <div class="portfolio-wrap">
                      <a
                        href="assets/img/portfolio/product-1.jpg"
                        data-gallery="portfolio-gallery-app"
                        class="glightbox"
                      >
                        <img
                          src={val.category_image}
                          class="img-fluid"
                          alt=""
                        />
                      </a>
                      <div class="portfolio-info">
                        <h4>
                          <a href="portfolio-details.html" title="More Details">
                            {val.category_name}
                          </a>
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
    </main>
  );
};

export default Services;
