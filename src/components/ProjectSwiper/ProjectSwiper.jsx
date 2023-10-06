'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard } from 'swiper/modules';
import PropTypes from 'prop-types';

import { ProjectListItem } from '../ProjectListItem';
import { ProjectSwiperNav } from '../ProjectSwiperNav';

import 'swiper/css';
import 'swiper/css/keyboard';

import { ProjectStaticList } from '../ProjectStaticList';

export const ProjectSwiper = ({
  projectList,
  staticData,
  setIsModalOpen,
  setImageList,
}) => {
  const isNotSwiper = projectList?.length <= 3;
  const isStaticOnly = projectList?.length === 1;

  return (
    <>
      <div
        className={`${
          isNotSwiper
            ? isStaticOnly
              ? 'hidden'
              : 'xl:hidden'
            : 'xl:max-w-[1220px] xl:mx-auto'
        } `}
      >
        <Swiper
          navigation={{
            enabled: true,
            prevEl: '.prev',
            nextEl: '.next',
            disabledClass: 'opacity-30',
          }}
          keyboard={{
            enabled: true,
            onlyInViewport: true,
          }}
          grabCursor={true}
          spaceBetween={12}
          centeredSlides={false}
          modules={[Navigation, Keyboard]}
          slidesPerView={'auto'}
          slidesOffsetBefore={20}
          slidesOffsetAfter={20}
          lazyPreloadPrevNext={1}
          onKeyPress={(swiper, keyCode) => {
            if (keyCode === 9) {
              const activeSlide = swiper.slides[swiper.activeIndex + 1];
              const focusedElement = document.activeElement;
              if (focusedElement === activeSlide) {
                swiper.slideNext();
              }
            }
          }}
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
              tabIndex={0}
              key={project.id}
              className="project-slide !flex flex-col !w-[280px] md:!w-[390px] !h-[606px] md:!h-[658px] rounded-10"
            >
              <ProjectListItem
                project={project}
                staticData={staticData}
                setIsModalOpen={setIsModalOpen}
                setImageList={setImageList}
              />
            </SwiperSlide>
          ))}
          <ProjectSwiperNav
            variant="cards"
            staticData={{
              prevBtn: staticData?.prevBtn,
              nextBtn: staticData?.nextBtn,
            }}
          />
        </Swiper>
      </div>

      {isNotSwiper && (
        <ProjectStaticList
          projectList={projectList}
          staticData={staticData}
          setIsModalOpen={setIsModalOpen}
          setImageList={setImageList}
        />
      )}
    </>
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
    prevBtn: PropTypes.string.isRequired,
    nextBtn: PropTypes.string.isRequired,
  }).isRequired,
  setImageList: PropTypes.func.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
};
