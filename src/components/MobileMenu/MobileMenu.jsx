'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Transition } from '@headlessui/react';

import { NavBar } from '../NavBar';
import { LocaleSwitcher } from '../LocaleSwitcher';
import CloseIcon from 'public/icons/close.svg';

export const MobileMenu = ({
  navArray,
  switcherAria,
  lang,
  menuToggle,
  isMenuOpen,
  closeMenuAria,
  section,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onKeyDown = e => {
      if (e.code === 'Escape') {
        menuToggle();
        document.body.classList.remove('overflow-hidden');
      }
    };

    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
      window.addEventListener('keydown', onKeyDown);
    } else {
      document.body.classList.remove('overflow-hidden');
      window.removeEventListener('keydown', onKeyDown);
    }
  }, [isMenuOpen, menuToggle]);

  const handleOverlayClick = ({ currentTarget, target }) => {
    if (currentTarget !== target) return;
    menuToggle();
  };

  return mounted
    ? createPortal(
        <Transition
          show={isMenuOpen}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className={`fixed top-0 bottom-0 left-0 right-0 menu flex justify-center`}
            onClick={handleOverlayClick}
          >
            <button
              onClick={menuToggle}
              className="absolute top-9 right-9 w-6 h-6"
              aria-expanded={isMenuOpen}
              aria-label={closeMenuAria}
            >
              <CloseIcon className="stroke-white stroke-2 w-full h-full" />
            </button>

            <div className="pt-32 w-auto inline-flex flex-col items-center gap-9">
              <NavBar
                navArray={navArray}
                section={section}
                menuToggle={menuToggle}
              />
              <div className="relative w-[65px] h-[28px]">
                <LocaleSwitcher switcherAria={switcherAria} lang={lang} />
              </div>
            </div>
          </div>
        </Transition>,

        document.body,
      )
    : null;
};

MobileMenu.propTypes = {
  navArray: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  switcherAria: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
  menuToggle: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  closeMenuAria: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired,
};
