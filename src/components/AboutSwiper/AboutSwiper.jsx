'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import PropTypes from 'prop-types';

import { AboutCard } from '../AboutCard';
import 'swiper/css';

export const AboutSwiper = ({ benefits }) => {
  return (
    <Swiper
      grabCursor={true}
      spaceBetween={12}
      centeredSlides={false}
      slidesPerView={'auto'}
      slidesOffsetBefore={20}
      slidesOffsetAfter={20}
      className="aboutSwiper"
      breakpoints={{
        768: {
          spaceBetween: 24,
          slidesOffsetBefore: 36,
          slidesOffsetAfter: 36,
        },
      }}
    >
      {benefits.map((benefit, index) => (
        <SwiperSlide
          key={index}
          className="!w-[279px] !h-auto md:!w-[287px] border-2 border-tertiary rounded-10"
        >
          <AboutCard data={benefit} index={index} />
        </SwiperSlide>
      ))}
    </Swiper>
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
