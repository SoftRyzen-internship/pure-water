'use client';

import PropTypes from 'prop-types';
import Link from 'next/link';

import LogoIcon from 'public/icons/logo.svg';

export const Logo = ({ logoAria, lang }) => {
  return (
    <Link
      href={`/${lang}`}
      aria-label={logoAria}
      className="block w-[90px] h-[48px] xl:w-[92px] xl:h-[54px] text-white/75 hover:text-white focus:text-white transition-colors duration-300 "
    >
      <LogoIcon className="w-full h-full fill-current" />
    </Link>
  );
};

Logo.propTypes = {
  logoAria: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
};
