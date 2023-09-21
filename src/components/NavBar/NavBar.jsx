'use client';

import React from 'react';
import { Link } from 'react-scroll';
import PropTypes from 'prop-types';

export const NavBar = ({ navArray, section }) => {
  const sectionClasses = {
    header: 'hidden xl:flex flex-row gap-6 items-center justify-center',
    footer: 'hidden xl:flex flex-col gap-2 items-end',
    headerMenu: 'flex xl:hidden flex-col gap-[23px] items-center',
    footerMenu: 'flex xl:hidden flex-col gap-[23px] items-center',
  };

  const getFontWeight = () =>
    section === 'header' ? 'font-medium' : 'font-light';

  const sortedArray = () => {
    if (section === 'header' || section === 'headerMenu') {
      return navArray.slice(1);
    } else {
      return navArray;
    }
  };

  return (
    <nav>
      <ul className={`text-base ${sectionClasses[section]}`}>
        {sortedArray().map(({ label, id }) => {
          return (
            <li key={id}>
              <Link
                to={id}
                smooth={true}
                duration={500}
                className={`${getFontWeight()} text-white/75 py-3 transition-colors  duration-300 cursor-pointer hover:text-white focus:text-white`}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

NavBar.propTypes = {
  navArray: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  section: PropTypes.oneOf(['header', 'footer', 'headerMenu', 'footerMenu'])
    .isRequired,
};
