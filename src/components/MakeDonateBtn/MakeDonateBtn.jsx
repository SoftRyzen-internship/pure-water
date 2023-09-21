'use client';

import React, { useState } from 'react';
import { Link } from 'react-scroll';
import PropTypes from 'prop-types';
import DefaultWaterdrop from '/public/icons/default-waterdrop.svg';
import DefaultBlueWaterdrop from '/public/icons/default-blue-waterdrop.svg';
import HoverWaterdrop from '/public/icons/hover-waterdrop.svg';
import HoverBlueWaterdrop from '/public/icons/hover-blue-waterdrop.svg';

export const MakeDonateBtn = ({ title, section }) => {
  const styled = {
    hero: 'textGradient text-transparent bg-clip-text bg-white/90 hover:bg-white/100 focus:bg-white/100',
    currentFundraising:
      'bg-gradient-to-b from-sky-500/75 to-sky-700/75 hover:iconGradient focus:iconGradient text-white',
  };

  const [isHover, setIsHover] = useState(false);
  const handleHover = () => {
    setIsHover(true);
  };
  const handleLeaveHover = () => {
    setIsHover(false);
  };

  return (
    <Link
      to="donate"
      smooth={true}
      duration={500}
      className={`${styled[section]} flex justify-center items-center gap-2 rounded-10 text-xl md:text-2xl xl:text-[28px] font-medium w-64 h-16 md:w-[315px] md:h-[78px] xl:w-[374px] xl:h-[93px] py-4 px-6 md:py-5 md:px-9 xl:py-6 xl:px-12 transition-opacity cursor-pointer fill-current`}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeaveHover}
      onFocus={handleHover}
      onBlur={handleLeaveHover}
    >
      {isHover ? (
        section === 'hero' ? (
          <span className="flex justify-center items-start w-6 h-6">
            <HoverBlueWaterdrop className="w-[14px] h-[21px]" />
          </span>
        ) : (
          <span className="flex justify-center items-start w-6 h-6">
            <HoverWaterdrop className="w-[14px] h-[21px]" />
          </span>
        )
      ) : section === 'hero' ? (
        <span className="flex justify-center items-start w-6 h-6">
          <DefaultBlueWaterdrop className="w-[14px] h-[21px]" />
        </span>
      ) : (
        <span className="flex justify-center items-start w-6 h-6">
          <DefaultWaterdrop className="w-[14px] h-[21px]" />
        </span>
      )}
      <span>{title}</span>
    </Link>
  );
};

MakeDonateBtn.propTypes = {
  title: PropTypes.string.isRequired,
  section: PropTypes.oneOf(['hero', 'currentFundraising']).isRequired,
};
