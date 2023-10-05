'use client';

import Image from 'next/image';
import PropTypes from 'prop-types';

import { ProjectOverlay } from '../ProjectOverlay';
import { convertImage, toBase64 } from '@/utils/getImageBlur';
import TapIcon from 'public/icons/tap.svg';

export const ProjectListItem = ({
  project,
  staticData,
  setIsModalOpen,
  setImageList,
}) => {
  const { title, description, location, imageList } = project;

  const handleImgClick = images => {
    setIsModalOpen(true);
    setImageList(images);
    document.body.style.overflow = 'hidden';
  };

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      handleImgClick(imageList);
    }
  };

  return (
    <div className="w-full h-full rounded-10 flex justify-center items-center iconGradient">
      <div className="project-card bg-white w-[calc(100%-4px)] h-[calc(100%-4px)] px-3 md:px-6 py-6 rounded-[8px] flex flex-col">
        <div
          tabIndex={0}
          className="relative rounded-20 md:!w-full overflow-hidden mb-3 md:mb-4"
          onClick={() => handleImgClick(imageList)}
          onKeyDown={handleKeyDown}
        >
          <Image
            src={imageList[0].image.secure_url}
            alt={imageList[0].alt}
            width={256}
            height={187}
            quality={100}
            loading="lazy"
            className="!static !w-[256px] md:!w-[342px] !h-[187px] md:!h-[250px] object-cover"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              convertImage(256, 187),
            )}`}
          />
          <span className="xl:hidden absolute bottom-[5px] right-[5px] flex items-center justify-center w-8 h-8 bg-gradient-to-b from-lighterBlue to-[#0F5598] opacity-75 rounded-full">
            <TapIcon className="w-[18px] h-6 fill-white" />
          </span>
          <ProjectOverlay title={staticData?.overlay} />
        </div>

        <h3 className="h-[96px] mb-5 xl:mb-6 text-xl/[1.2] md:text-2xl/none font-medium">
          {title}
        </h3>

        <p className="project-description text-sm/[1.43] md:text-base/tight tracking-[-0.28px] md:tracking-[-0.32px]">
          {description}
        </p>

        <p className="flex gap-3 items-center mt-auto text-base/[1.2] md:text-xl/[1.2]">
          <span className="font-light">{`${staticData.city}:`}</span>
          <span>{location}</span>
        </p>
      </div>
    </div>
  );
};

ProjectListItem.propTypes = {
  project: PropTypes.shape({
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
  staticData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    overlay: PropTypes.string.isRequired,
  }),
  setImageList: PropTypes.func.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
};
