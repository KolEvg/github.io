import React from 'react';
import './testimonials.css';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

// import Swiper core and required modules

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Oleg Losev',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ducimus esse reiciendis ea rem, nostrum laboriosam quidem aliquid natus culpa repellat voluptatum, neque nihil voluptates minima, nobis minus dolorum illo debitis.',
  },
  {
    avatar: AVTR2,
    name: 'Olya Valeva',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ducimus esse reiciendis ea rem, nostrum laboriosam quidem aliquid natus culpa repellat voluptatum, neque nihil voluptates minima, nobis minus dolorum illo debitis.',
  },
  {
    avatar: AVTR3,
    name: 'Serg Kusia',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ducimus esse reiciendis ea rem, nostrum laboriosam quidem aliquid natus culpa repellat voluptatum, neque nihil voluptates minima, nobis minus dolorum illo debitis.',
  },
  {
    avatar: AVTR4,
    name: 'Alena Serga',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ducimus esse reiciendis ea rem, nostrum laboriosam quidem aliquid natus culpa repellat voluptatum, neque nihil voluptates minima, nobis minus dolorum illo debitis.',
  },
];

function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
      data.map(({
        el, avatar, name, review,
      }) => (
        <SwiperSlide key={el} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt="Avatar One" />
          </div>
          <h5 className="clients__name">{name}</h5>
          <small className="client__review">
            {review}
          </small>
        </SwiperSlide>
      ))
    }
      </Swiper>
    </section>
  );
}

export default Testimonials;
