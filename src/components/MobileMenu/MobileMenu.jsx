'use client';

import PropTypes from 'prop-types';
import { Transition, Dialog } from '@headlessui/react';

import { NavBar } from '@/components/NavBar';
import { LocaleSwitcher } from '@/components/LocaleSwitcher';
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
  return (
    <Transition
      show={isMenuOpen}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-3000"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Dialog
        open={isMenuOpen}
        onClose={menuToggle}
        className={`fixed top-0 bottom-0 left-0 right-0 menu z-[999] inset-0 overflow-y-auto xl:hidden`}
      >
        <Dialog.Panel className="py-9 flex flex-col items-center gap-9">
          <div className="container flex justify-end mb-2">
            <button
              onClick={menuToggle}
              className="w-12 h-12 py-3 px-3 "
              aria-label={closeMenuAria}
            >
              <CloseIcon className="stroke-white stroke-2 w-full h-full" />
            </button>
          </div>

          <NavBar
            navArray={navArray}
            section={section}
            menuToggle={menuToggle}
          />
          <div className="relative w-[65px] h-[28px]">
            <LocaleSwitcher switcherAria={switcherAria} lang={lang} />
          </div>
        </Dialog.Panel>
      </Dialog>
    </Transition>
  );
};

MobileMenu.propTypes = {
  navArray: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  switcherAria: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
  menuToggle: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  closeMenuAria: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired,
};
