import React from "react";
import PureCounter from "@srexi/purecounterjs";

const StatsCounter = () => {
  const counter1 = new PureCounter();

  return (
    <>
      <section id="stats-counter" class="stats-counter">
        <div class="container" data-aos="fade-up">
          <div class="row gy-4 align-items-center">
            <div class="col-lg-6">
              <img src="assets/img/stats-img.svg" alt="" class="img-fluid" />
            </div>

            <div class="col-lg-6">
              <div class="stats-item d-flex align-items-center">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="454"
                  data-purecounter-duration="1"
                  class="purecounter"
                ></span>
                <p>
                  <strong>Happy Clients</strong> consequuntur quae diredo para
                  mesta
                </p>
              </div>

              <div class="stats-item d-flex align-items-center">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="521"
                  data-purecounter-duration="1"
                  class="purecounter"
                ></span>
                <p>
                  <strong>Projects</strong> adipisci atque cum quia aut
                </p>
              </div>

              <div class="stats-item d-flex align-items-center">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="453"
                  data-purecounter-duration="1"
                  class="purecounter"
                ></span>
                <p>
                  <strong>Hours Of Support</strong> aut commodi quaerat
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StatsCounter;
