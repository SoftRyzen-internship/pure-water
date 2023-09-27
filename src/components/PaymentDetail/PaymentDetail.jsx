'use client';

import { useState } from 'react';
import PropTypes from 'prop-types';
import copy from 'copy-to-clipboard';

import Copy from '/public/icons/copy.svg';
import Check from '/public/icons/check.svg';

export const PaymentDetail = ({ title, description, isSwift }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    copy(description);
    setCopied(true);
  };

  return (
    <div
      className={
        isSwift
          ? 'w-full md:flex md:flex-col md:gap-2 xl:gap-3'
          : 'md:flex md:gap-2 md:justify-start md:items-center'
      }
    >
      <h4 className="text-base md:text-xl font-semibold">{title}</h4>
      <div className="flex md:gap-2 justify-start items-center">
        <p className="shrink text-xs md:text-xl font-normal">{description}</p>
        <div
          className="flex-none flex justify-center items-center w-10 md:w-12 xl:w-6 h-10 md:h-12 xl:h-6 opacity-75 hover:opacity-100 transition duration-300 cursor-pointer fill-none stroke-current"
          onClick={handleCopy}
        >
          {copied ? <Check /> : <Copy />}
        </div>
      </div>
    </div>
  );
};

PaymentDetail.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isSwift: PropTypes.bool,
};
