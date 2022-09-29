import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <>
      <section id="call-to-action" className="call-to-action">
        <div className="container text-center" data-aos="zoom-out">
          <Link to="/" className="glightbox play-btn"></Link>
          <h3>Call To Action</h3>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <Link className="cta-btn" to="/">
            Call To Action
          </Link>
        </div>
      </section>
    </>
  );
};

export default CallToAction;
