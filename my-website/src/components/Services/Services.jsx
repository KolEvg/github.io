import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';

function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <div>
                <BiCheck className="service_list-icon" />
              </div>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/* End ui/ux */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <div>
                <BiCheck className="service_list-icon" />
              </div>
              <p>
                {' '}
                You want to launch your website, you need a new design for your future site?
                Contact me and we will discuss your needs and desires.
              </p>
            </li>
          </ul>
        </article>
        {/* End web */}
        <article className="service">
          <div className="service__head">
            <h3>Server Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <div>
                <BiCheck className="service_list-icon" />
              </div>
              <p>
                You want to launch your website, you need create server with database.
                Contact me and we will discuss your needs and desires.
                {' '}
              </p>
            </li>
          </ul>
        </article>
        {/* End content */}
      </div>
    </section>

  );
}

export default Services;
