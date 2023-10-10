'use client';

import { Fragment, useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Dialog, Transition } from '@headlessui/react';
import PropTypes from 'prop-types';

import { ProjectSwiperNav } from '../ProjectSwiperNav';
import CloseIcon from 'public/icons/close.svg';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

export const GalleryModal = ({
  imageList,
  isModalOpen,
  setIsModalOpen,
  staticData,
}) => {
  const thumbsSwiper = useRef(null);

  const mobileWrapperClasses =
    imageList.length < 4 ? 'flex justify-center items-center' : '';

  const tabletWrapperClasses =
    imageList.length < 6 ? 'md:flex md:justify-center md:items-center' : '';

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <Transition appear show={isModalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={handleModalClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed top-0 left-0 flex justify-center xl:items-center w-[100vw] h-screen pt-9 px-5 md:pt-4 md:px-9 xl:py-10 bg-[#020f14bf] backdrop-blur-[25px] overflow-auto">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-300"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative max-h-[360px] md:max-h-full flex flex-col gap-y-6 md:gap-y-4 max-w-xs md:max-w-3xl xl:max-w-7xl mx-auto">
                <button
                  onClick={handleModalClose}
                  type="button"
                  className="xl:absolute xl:top-0 xl:right-[-10%] p-[11px] self-end text-[#ffffffbf] hover:text-white transition-colors duration-300"
                  aria-label={staticData?.closeBtn}
                >
                  <CloseIcon className="w-[26px] h-[26px] stroke-[currentColor] stroke-[3] stroke-linecap-round" />
                </button>

                <div className="relative max-w-[280px] md:max-w-[696px] xl:max-w-[842px] md:pb-9 xl:pb-0">
                  <Swiper
                    loop={false}
                    navigation={{ enabled: false }}
                    grabCursor={true}
                    spaceBetween={12}
                    slidesPerView={1}
                    thumbs={{
                      swiper: '.swiper-thumbs',
                      slideThumbActiveClass: 'swiper-slide-thumb-active',
                    }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="!mb-6"
                    lazyPreloadPrevNext={1}
                    breakpoints={{
                      768: {
                        spaceBetween: 24,
                      },
                      1280: {
                        navigation: {
                          enabled: true,
                          prevEl: '.prevBtn',
                          nextEl: '.nextBtn',
                          disabledClass: 'opacity-30',
                        },
                      },
                    }}
                  >
                    {imageList.map(({ id, image, alt }) => (
                      <SwiperSlide
                        key={id}
                        className="!w-[280px] md:!w-[696px] xl:!w-[842px]"
                      >
                        <Image
                          src={image.secure_url}
                          alt={alt}
                          width={842}
                          height={630}
                          quality={100}
                          className="!static !w-[280px] !h-[210px] md:!w-[696px] md:!h-[520px] xl:!w-[842px] xl:!h-[630px] object-contain"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  <Swiper
                    ref={thumbsSwiper}
                    watchSlidesProgress={true}
                    slidesPerView={4}
                    freeMode={true}
                    loop={false}
                    centeredSlides={false}
                    spaceBetween={12}
                    wrapperClass={`${mobileWrapperClasses}${tabletWrapperClasses}`}
                    className="swiper-thumbs"
                    modules={[FreeMode, Navigation, Thumbs]}
                    lazyPreloadPrevNext={4}
                    breakpoints={{
                      768: {
                        slidesPerView: 6,
                        lazyPreloadPrevNext: 6,
                      },
                    }}
                  >
                    {imageList.map(({ id, image, alt }) => (
                      <SwiperSlide
                        key={id}
                        className="cursor-pointer opacity-30"
                      >
                        <Image
                          src={image.secure_url}
                          alt={alt}
                          width={130}
                          height={88}
                          quality={100}
                          className="!static !w-[61px] h-[48px] md:!w-[106px] xl:!w-[130px] md:h-[80px] xl:h-[88px] object-contain"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <ProjectSwiperNav
                    variant="gallery"
                    staticData={{
                      prevBtn: staticData?.prevBtn,
                      nextBtn: staticData?.nextBtn,
                    }}
                  />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

GalleryModal.propTypes = {
  imageList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }),
      alt: PropTypes.string.isRequired,
    }),
  ).isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
  staticData: PropTypes.shape({
    closeBtn: PropTypes.string.isRequired,
    nextBtn: PropTypes.string.isRequired,
    prevBtn: PropTypes.string.isRequired,
  }).isRequired,
};
