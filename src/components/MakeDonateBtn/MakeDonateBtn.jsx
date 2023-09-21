'use client';
import { Link } from 'react-scroll';
import PropTypes from 'prop-types';

export const MakeDonateBtn = ({ children, section }) => {
  const styled = {
    hero: 'bg-white bg-clip-text text-transparent textGradient',
    currentFundraising: 'bg-gradient-to-b from-sky-500 to-sky-700 text-white',
  };
  const classNames = [
    styled[section],
    'flex justify-center items-center gap-2 rounded-10',
    'text-xl md:text-2xl xl:text-[28px] font-medium',
    'w-64 h-16 md:w-[315px] md:h-[78px] xl:w-[374px] xl:h-[93px]',
    'py-4 px-6 md:py-5 md:px-9 xl:py-6 xl:px-12',
    'opacity-90 hover:opacity-100 focus:opacity-100 transition-opacity cursor-pointer',
  ];
  return (
    <Link
      to="donate"
      smooth={true}
      duration={500}
      className={classNames.join(' ')}
    >
      {children}
    </Link>
  );
};

MakeDonateBtn.propTypes = {
  children: PropTypes.node,
  section: PropTypes.oneOf(['hero', 'currentFundraising']),
};
