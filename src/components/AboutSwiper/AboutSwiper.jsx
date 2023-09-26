'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import PropTypes from 'prop-types';

import { AboutCard } from '../AboutCard';
import 'swiper/css';

export const AboutSwiper = ({ benefits }) => {
  return (
    <div className="xl:hidden">
      <Swiper
        grabCursor={true}
        spaceBetween={12}
        centeredSlides={false}
        slidesPerView={'auto'}
        breakpoints={{
          768: {
            spaceBetween: 24,
          },
        }}
      >
        {benefits.map((benefit, index) => (
          <SwiperSlide key={index} className="w-[279px] px-3">
            <AboutCard data={benefit} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

AboutSwiper.propTypes = {
  benefits: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      paragraph: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
  ).isRequired,
};
