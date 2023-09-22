'use client';

import { useState } from 'react';
import Image from 'next/image';
import TapIcon from 'public/icons/tap.svg';
import { ProjectOverlay } from '../ProjectOverlay';

export const ProjectListItem = ({ project, staticData }) => {
  const [isHovered, setIsHovered] = useState(false);

  const { title, description, location, imageList } = project;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="flex flex-col h-[437px] md:h-[658px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative rounded-[20px] overflow-hidden mb-3 md:mb-4">
        <Image
          src={imageList[0].image.url}
          alt={title}
          layout="fill"
          className="!static !max-h-[183px] md:!max-h-[250px] object-cover"
        />
        <span className="xl:hidden absolute bottom-[5px] right-[5px] flex items-center justify-center w-8 h-8 bg-gradient-to-b from-lighterBlue to-[#0F5598] opacity-75 rounded-full">
          <TapIcon className="w-[18px] h-6 fill-white" />
        </span>
        <ProjectOverlay
          staticData={staticData}
          styles={isHovered ? 'opacity-100' : 'opacity-0'}
        />
      </div>
      <h3 className="h-[72px] mb-5 xl:mb-6 text-xl/[1.2] md:text-2xl/none font-medium">
        {title}
      </h3>
      <p className="max-h-[100px] md:max-h-full text-sm/[1.43] md:text-base/tight overflow-auto tracking-[-0.28px] md:tracking-[-0.32px]">
        {description}
      </p>
      <p className="flex gap-3 items-center mt-auto text-base/[1.2] md:text-xl/[1.2]">
        <span className="font-light">{`${staticData.projects.city}:`}</span>
        <span>{location}</span>
      </p>
    </div>
  );
};
