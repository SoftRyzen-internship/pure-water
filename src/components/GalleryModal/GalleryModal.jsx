'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import PropTypes from 'prop-types';

import { ProjectSwiperNav } from '../ProjectSwiperNav';
import CloseIcon from 'public/icons/close.svg';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

export const GalleryModal = ({ imageList, setIsModalOpen }) => {
  const thumbsSwiper = useRef(null);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        setIsModalOpen(false);
        document.body.style.overflow = 'auto';
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [setIsModalOpen]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
      document.body.style.overflow = 'auto';
    }
  };

  const handleCloseBtnClick = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed top-0 left-0 flex justify-center xl:items-center w-[100vw] h-screen pt-9 px-5 md:pt-4 md:px-9 xl:py-10 z-50 bg-[#020f14bf] backdrop-blur-[25px] overflow-auto"
    >
      <div className="relative max-h-[360px] md:max-h-full flex flex-col gap-y-6 md:gap-y-4 max-w-xs md:max-w-3xl xl:max-w-7xl mx-auto">
        <button
          onClick={handleCloseBtnClick}
          type="button"
          className="xl:absolute xl:top-0 xl:right-[-10%] p-[11px] pr-0 self-end text-[#ffffffbf] hover:text-white transition-colors duration-300"
        >
          <CloseIcon className="w-[26px] h-[26px] stroke-[currentColor] stroke-[3] stroke-linecap-round" />
        </button>
        <div className="relative max-w-[280px] md:max-w-[696px] xl:max-w-[842px] md:pb-9">
          <Swiper
            loop={true}
            navigation={{ enabled: false }}
            grabCursor={true}
            spaceBetween={12}
            slidesPerView={1}
            thumbs={{ swiper: thumbsSwiper.current || '.swiper-thumbs' }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="!mb-6"
            breakpoints={{
              768: {
                spaceBetween: 24,
              },
              1280: {
                navigation: {
                  enabled: true,
                  prevEl: '.prev',
                  nextEl: '.next',
                },
              },
            }}
          >
            {imageList.map(({ id, image, alt }) => (
              <SwiperSlide
                key={id}
                className="!w-[280px] md:!w-[696px] xl:!w-[842px]
            "
              >
                <Image
                  src={image.secure_url}
                  alt={alt}
                  width={280}
                  height={210}
                  quality={100}
                  className="!static !w-[280px] !h-[210px] md:!w-[696px] md:!h-[520px] xl:!w-[842px] xl:!h-[630px] object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            ref={thumbsSwiper}
            watchSlidesProgress={true}
            slidesPerView={4}
            freeMode={true}
            loop={true}
            spaceBetween={12}
            wrapperClass="flex justify-center items-center"
            className="swiper-thumbs"
            modules={[FreeMode, Navigation, Thumbs]}
            breakpoints={{
              768: {
                slidesPerView: 6,
              },
            }}
          >
            {imageList.map(({ id, image, alt }) => (
              <SwiperSlide key={id} className="cursor-pointer">
                <Image
                  src={image.secure_url}
                  alt={alt}
                  width={61}
                  height={48}
                  quality={100}
                  className="!static !w-[61px] h-[48px] md:!w-[106px] xl:!w-[130px] md:h-[80px] xl:h-[88px] object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <ProjectSwiperNav variant="gallery" />
    </div>
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
  setIsModalOpen: PropTypes.func.isRequired,
};
