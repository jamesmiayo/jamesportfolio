import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'daasd adipiscing emattis lectus. In iaculis eleifend dolor vita',
  },
  {
    avatar: AVTR2,
    name: 'Shatta Wale ',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscasdsadlis augue, id mattis lectus. In iaculis eleifend dolor vitae pharetra. Curabitur lectus ante, posuere nec est non, tincidunt molestie nisl. Sed at arcu et lacus dignissim tempus molestie nec lectus. Nam ultrices condimentum fringilla. Aenean fermentum nibh id metus fringilla, in fringilla purus cursus. Aenean blandit nec neque ac ultricies.',
  },
  {
    avatar: AVTR3,
    name: 'Kwame Despite',
    review:
      'Lorem ipsasdasdng elit. Maecenas non convallis augue, id mattis lectus. In iaculis eleifend dolor vitae pharetra. Curabitur lectus ante, posuere nec est non, tincidunt molestie nisl. Sed at arcu et lacus dignissim tempus molestie nec lectus. Nam ultrices condimentum fringilla. Aenean fermentum nibh id metus fringilla, in fringilla purus cursus. Aenean blandit nec neque ac ultricies.',
  },
  {
    avatar: AVTR4,
    name: 'Nana Ama McBrown',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non convallis augue, id mattis lectus. In iaculis eleifend dolor vitae pharetra. Curabitur lectus ante, posuere nec est non, tincidunt molestie nisl. Sed at arcu et lacus dignissim tempus molestie nec lectus. Nam ultrices condimentum fringilla. Aenean fermentum nibh id metus fringilla, in fringilla purus cursus. Aenean blandit nec neque ac ultricies.',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        spaceBetween={40}
        slidesPerView={1}
        style={{ '--swiper-pagination-color': 'var(--color-primary)' }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide>
              <article key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt={name} />
                </div>
                <h5 className="clients__name">{name}</h5>
                <small className="clients__review">{review}</small>
              </article>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
