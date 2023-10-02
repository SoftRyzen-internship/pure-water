'use client';

import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';

import { Container } from '@/components/Container';
import { Contacts } from '@/components/Contacts';
import { CreatedBy } from '@/components/CreatedBy';
import { Logo } from '@/components/Logo';
import { SocialLinks } from '@/components/SocialLinks';
import { NavBar } from '@/components/NavBar';
import { MobileMenu } from '@/components/MobileMenu';
import MenuIcon from 'public/icons/burger-menu.svg';

export const Footer = ({
  contacts,
  createdBy,
  socials,
  aria,
  lang,
  menuLabel,
  navArray,
}) => {
  const { logo, switcher, closeMenu, openMenu } = aria;
  const { title, links } = socials;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuToggle = () => setIsMenuOpen(!isMenuOpen);

  const isDesktop = useMediaQuery({
    query: '(min-width: 1280px)',
  });

  return (
    <footer className="footer w-full pt-[138px] md:pt-[280px] xl:pt-[454px] pb-10 xl:pb-12 text-white">
      <Container className="flex justify-between">
        <div className="hidden xl:block w-[130px]">
          <Logo logoAria={logo} lang={lang} />
        </div>
        <div className="relative">
          <Contacts contacts={contacts} />
          <CreatedBy createdBy={createdBy} />
        </div>
        <div className="hidden xl:block">
          <h3 className="h-8 text-xl font-medium mb-2">{title}</h3>
          <SocialLinks section="footer" socials={links} />
        </div>
        <button
          type="button"
          aria-label={openMenu}
          className="block xl:hidden w-12 h-12"
          onClick={menuToggle}
        >
          <MenuIcon className="fill-white w-12 h-12" />
        </button>
        <div className="hidden xl:block">
          <h3 className="h-8 mb-2 text-xl font-medium text-end">{menuLabel}</h3>
          <NavBar section="footer" navArray={navArray} />
        </div>

        {!isDesktop && (
          <MobileMenu
            navArray={navArray}
            switcherAria={switcher}
            lang={lang}
            menuToggle={menuToggle}
            isMenuOpen={isMenuOpen}
            closeMenuAria={closeMenu}
            section="headerMenu"
          />
        )}
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      contact: PropTypes.string.isRequired,
    }),
  ).isRequired,
  createdBy: PropTypes.shape({
    label: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  socials: PropTypes.shape({
    title: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        ariaLabel: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
  aria: PropTypes.shape({
    logo: PropTypes.string.isRequired,
    switcher: PropTypes.string.isRequired,
    closeMenu: PropTypes.string.isRequired,
    openMenu: PropTypes.string.isRequired,
  }).isRequired,
  lang: PropTypes.string.isRequired,
  menuLabel: PropTypes.string.isRequired,
  navArray: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
