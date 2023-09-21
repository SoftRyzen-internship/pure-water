'use client';

import React from 'react';
import { Link } from 'react-scroll';
import PropTypes from 'prop-types';

export const NavBar = ({ navArray, section }) => {
  const sectionClasses = {
    header: 'flex-row gap-6 items-center justify-center',
    footer: 'flex-col gap-2 items-end',
    menu: 'flex-col gap-[23px] items-center',
  };

  const getFontWeight = () =>
    section === 'header' ? 'font-medium' : 'font-light';

  return (
    <nav>
      <ul className={`flex text-base ${sectionClasses[section]}`}>
        {navArray.map(({ label, id }) => {
          return (
            <li key={id}>
              <Link
                to={id}
                smooth={true}
                duration={500}
                className={`${getFontWeight()} text-white/75 py-3 transition-colors cursor-pointer hover:text-white focus:text-white`}
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
  section: PropTypes.oneOf(['header', 'footer', 'menu']).isRequired,
};
