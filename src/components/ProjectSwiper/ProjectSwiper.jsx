'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import PropTypes from 'prop-types';

import { ProjectListItem } from '../ProjectListItem';
import { ProjectSwiperNav } from '../ProjectSwiperNav';

import 'swiper/css';

export const ProjectSwiper = ({
  projectList,
  staticData,
  setIsModalOpen,
  setImageList,
}) => {
  return (
    <div className="mt-6 xl:mt-8 xl:max-w-[1220px] xl:mx-auto">
      <Swiper
        navigation={{
          prevEl: '.prev',
          nextEl: '.next',
          disabledClass: 'opacity-30 cursor-not-allowed',
        }}
        grabCursor={true}
        spaceBetween={12}
        centeredSlides={false}
        modules={[Navigation]}
        slidesPerView={'auto'}
        slidesOffsetBefore={20}
        slidesOffsetAfter={20}
        breakpoints={{
          768: {
            spaceBetween: 24,
            slidesOffsetBefore: 36,
            slidesOffsetAfter: 36,
          },
          1280: {
            spaceBetween: 24,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
          },
        }}
      >
        {projectList?.map(project => (
          <SwiperSlide
            key={project.id}
            className="project-slide !flex flex-col !w-[280px] md:!w-[390px] !h-[485px] md:!h-[658px] px-3 md:px-6 py-6 rounded-10 border-2 border-solid border-tertiary"
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
