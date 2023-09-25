'use client';

import PropTypes from 'prop-types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import LogoIcon from 'public/icons/logo.svg';

export const Logo = ({ logoAria }) => {
  const currentLocale = usePathname().split('/')[1];

  return (
    <Link href={`/${currentLocale}`} aria-label={logoAria}>
      <LogoIcon className="w-[90px] h-[48px] xl:w-[92px] xl:h-[54px] text-white/75 hover:text-white transition-colors duration-300 fill-current" />
    </Link>
  );
};

Logo.propTypes = {
  logoAria: PropTypes.string.isRequired,
};
