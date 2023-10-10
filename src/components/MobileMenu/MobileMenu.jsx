'use client';

import { Fragment } from 'react';
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
    <Transition appear show={isMenuOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={menuToggle}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 menu" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full justify-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-300"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="container w-full py-32 flex flex-col items-center justify-center gap-9 transform transition-all overflow-hidden">
                <button
                  onClick={menuToggle}
                  className={`absolute w-12 top-9 right-5 md:right-9 py-3 px-3`}
                  aria-label={closeMenuAria}
                >
                  <CloseIcon className="stroke-white stroke-2 w-full h-full" />
                </button>

                <NavBar
                  navArray={navArray}
                  section={section}
                  menuToggle={menuToggle}
                />

                <div className="relative w-[65px] h-[28px]">
                  <LocaleSwitcher switcherAria={switcherAria} lang={lang} />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
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
