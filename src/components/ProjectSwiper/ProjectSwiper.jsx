'use client';

import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ProjectListItem } from '../ProjectListItem';
import 'swiper/css';
import { ProjectSwiperNav } from '../ProjectSwiperNav';

export const ProjectSwiper = ({
  projectList,
  staticData,
  setIsModalOpen,
  setImageList,
}) => {
  return (
    <div>
      <Swiper
        navigation={{
          prevEl: '.prev',
          nextEl: '.next',
          disabledClass: 'opacity-75 cursor-not-allowed',
        }}
        grabCursor={true}
        spaceBetween={12}
        centeredSlides={false}
        modules={[Navigation]}
        slidesPerView={'auto'}
        breakpoints={{
          768: {
            spaceBetween: 24,
          },
        }}
      >
        {projectList?.map(project => (
          <SwiperSlide
            key={project.id}
            className="!w-[260px] md:!w-[390px] px-3 md:px-6 py-6 rounded-10 border-2 border-solid border-tertiary"
          >
            <ProjectListItem
              project={project}
              staticData={staticData}
              setIsModalOpen={setIsModalOpen}
              setImageList={setImageList}
            />
          </SwiperSlide>
        ))}
        <ProjectSwiperNav variant="cards" />
      </Swiper>
    </div>
  );
};

ProjectSwiper.propTypes = {
  setImageList: PropTypes.func.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
};
