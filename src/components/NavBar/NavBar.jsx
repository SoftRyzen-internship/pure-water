'use client';

import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import PropTypes from 'prop-types';

export const NavBar = ({ navArray, section, menuToggle }) => {
  const [sortedNavArray, setSortedNavArray] = useState(null);

  const sectionClasses = {
    header: 'hidden xl:flex flex-row gap-6 items-center justify-center',
    footer: 'hidden xl:flex flex-col gap-2 items-end',
    headerMenu: 'flex xl:hidden flex-col gap-[23px] items-center',
    footerMenu: 'flex xl:hidden flex-col gap-[23px] items-center',
  };

  useEffect(() => {
    if (section === 'header' || section === 'headerMenu') {
      setSortedNavArray(navArray.slice(1));
    } else {
      setSortedNavArray(navArray);
    }
  }, [navArray, section]);

  return (
    <nav>
      <ul className={`text-base ${sectionClasses[section]}`}>
        {sortedNavArray?.map(({ label, id }) => {
          return (
            <li key={id}>
              <Link
                href="/"
                to={id}
                onClick={menuToggle}
                smooth={true}
                duration={500}
                className={`${
                  section === 'header' ? 'font-medium' : 'font-light'
                } text-white/75 transition-colors  duration-300 cursor-pointer hover:text-white focus:text-white`}
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
  menuToggle: PropTypes.func,
};
