'use client';

import Link from 'next/link';
import PropTypes from 'prop-types';
import { usePathname } from 'next/navigation';
import LogoIcon from 'public/icons/logo.svg';

export const Logo = ({ logoText, logoAria, fontVariable }) => {
  const currentLocale = usePathname().split('/')[1];

  return (
    <Link
      href={`/${currentLocale}`}
      aria-label={logoAria}
      className={`${fontVariable} flex gap-2 items-center`}
    >
      <LogoIcon className="w-[30px] h-[48px] xl:w-[32px] xl:h-[52px] " />
      <p
        className={`font-montreal uppercase text-base/[16px] text-white/75 font-medium hover:text-white focus:text-white transition-colors duration-300 xl:text-base/[18px] ${
          currentLocale === 'uk' ? 'w-[52px]' : 'w-[90px]'
        }`}
      >
        {logoText}
      </p>
    </Link>
  );
};

Logo.propTypes = {
  logoText: PropTypes.string.isRequired,
  logoAria: PropTypes.string.isRequired,
  fontVariable: PropTypes.string.isRequired,
};
