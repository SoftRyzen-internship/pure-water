'use client';

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import copy from 'copy-to-clipboard';

import Copy from '/public/icons/copy.svg';
import Check from '/public/icons/check.svg';

export const PaymentDetail = ({
  title,
  description,
  isSwift,
  paymentIcons,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    copy(description);
    setCopied(true);
  };

  const { copyIcon, checkIcon } = paymentIcons;

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
        <p className="text-xs md:text-xl font-normal">{description}</p>

        <div className="w-10 md:w-12 xl:w-6 h-10 md:h-12 xl:h-6 relative">
          {copied ? (
            <div
              className="w-full h-full flex justify-center items-center cursor-pointer"
              title={checkIcon}
              aria-label={checkIcon}
            >
              {React.createElement(Check, {
                className: 'w-6 h-6 fill-white',
              })}
            </div>
          ) : (
            <button
              type="button"
              className="flex justify-center items-center w-full h-full opacity-75 hover:opacity-100 transition duration-300 cursor-pointer"
              onClick={handleCopy}
              title={copyIcon}
              aria-label={copyIcon}
            >
              {React.createElement(Copy, {
                className: 'w-6 h-6 fill-none stroke-current',
              })}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

PaymentDetail.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isSwift: PropTypes.bool,
  paymentIcons: PropTypes.shape({
    copyIcon: PropTypes.string.isRequired,
    checkIcon: PropTypes.string.isRequired,
  }).isRequired,
};
