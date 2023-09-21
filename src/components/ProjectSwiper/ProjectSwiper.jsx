'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ProjectListItem } from '../ProjectListItem';
import 'swiper/css';

export const ProjectSwiper = ({ projectList, staticData }) => {
  const [slidesPerView, setSlidesPerView] = useState(1.15);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(1.8);
      } else {
        setSlidesPerView(1.15);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="">
      <Swiper
        navigation={{
          prevEl: '.prev',
          nextEl: '.next',
        }}
        grabCursor={true}
        spaceBetween={12}
        centeredSlides={true}
        modules={[Navigation]}
        slidesPerView={slidesPerView}
        className=""
      >
        {projectList.map(project => (
          <SwiperSlide
            key={project.id}
            className="!w-[280px] px-3 py-6 rounded-10 border-2 border-solid border-tertiary"
          >
            <ProjectListItem project={project} staticData={staticData} />
          </SwiperSlide>
        ))}

        <div className="hidden xl:flex gap-x-12 justify-center items-center">
          <button type="button" className="prev"></button>
          <button type="button" className="next"></button>
        </div>
      </Swiper>
    </div>
  );
};
