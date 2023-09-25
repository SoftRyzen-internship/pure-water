'use client';

import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';

import { ProjectListItem } from '../ProjectListItem';
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
  projectList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      imageList: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          image: PropTypes.shape({
            url: PropTypes.string.isRequired,
          }),
          alt: PropTypes.string.isRequired,
        }),
      ),
    }),
  ).isRequired,
  staticData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    overlay: PropTypes.string.isRequired,
  }),
  setImageList: PropTypes.func.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
};
