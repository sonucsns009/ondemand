import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import server from "../Const";

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
                      to={`/services/${val.category_id}`}
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
                          to={`/services/${val.category_id}`}
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
  );
};

export default MainSubServices;
