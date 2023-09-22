'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ProjectListItem } from '../ProjectListItem';
import 'swiper/css';
import { ProjectSwiperNav } from '../ProjectSwiperNav';

export const ProjectSwiper = ({ projectList, staticData }) => {
  const [spaceBetween, setSpaceBetween] = useState(12);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSpaceBetween(24);
      } else {
        setSpaceBetween(12);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <Swiper
        navigation={{
          prevEl: '.prev',
          nextEl: '.next',
          disabledClass: 'opacity-75 cursor-not-allowed',
        }}
        grabCursor={true}
        spaceBetween={spaceBetween}
        centeredSlides={false}
        modules={[Navigation]}
        slidesPerView={'auto'}
      >
        {projectList.map(project => (
          <SwiperSlide
            key={project.id}
            className="!w-[260px] md:!w-[390px] px-3 md:px-6 py-6 rounded-10 border-2 border-solid border-tertiary"
          >
            <ProjectListItem project={project} staticData={staticData} />
          </SwiperSlide>
        ))}
        <ProjectSwiperNav />
      </Swiper>
    </div>
  );
};
