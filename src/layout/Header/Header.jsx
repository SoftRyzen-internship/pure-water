'use client';

import { useState } from 'react';
import PropTypes from 'prop-types';

import { Container } from '@/components/Container';
import { NavBar } from '@/components/NavBar';
import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import { Logo } from '@/components/Logo';
import { MobileMenu } from '@/components/MobileMenu/MobileMenu';
import MenuIcon from 'public/icons/burger-menu.svg';

export const Header = ({ aria, navArray, lang }) => {
  const { logo, switcher, closeMenu, openMenu } = aria;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuToggle = () => setIsMenuOpen(state => !state);

  return (
    <header className="absolute w-full pt-9 xl:pt-12">
      <Container>
        <div className="flex items-center justify-between">
          <Logo logoAria={logo} lang={lang} />

          <NavBar navArray={navArray} section="header" />

          <button
            aria-label={openMenu}
            aria-expanded={isMenuOpen}
            onClick={menuToggle}
            className="block xl:hidden"
          >
            <MenuIcon className="fill-white w-12 h-12" />
          </button>

          <div className="relative hidden xl:block w-[65px] h-[28px]">
            <LocaleSwitcher switcherAria={switcher} lang={lang} />
          </div>
        </div>

        <MobileMenu
          navArray={navArray}
          switcherAria={switcher}
          lang={lang}
          menuToggle={menuToggle}
          isMenuOpen={isMenuOpen}
          closeMenuAria={closeMenu}
          section="headerMenu"
        />
      </Container>
    </header>
  );
};

Header.propTypes = {
  navArray: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  lang: PropTypes.string.isRequired,
  aria: PropTypes.shape({
    logo: PropTypes.string,
    switcher: PropTypes.string,
    closeMenu: PropTypes.string,
    openMenu: PropTypes.string,
  }).isRequired,
};
