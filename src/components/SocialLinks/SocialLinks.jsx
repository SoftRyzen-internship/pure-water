import PropTypes from 'prop-types';
import React from 'react';

import Instagram from '/public/icons/instagram.svg';
import Facebook from '/public/icons/facebook.svg';

export const SocialLinks = ({ socials, section }) => {
  const icons = {
    Instagram,
    Facebook,
  };
  const styled = {
    hero: 'flex xl:gap-4',
    footer: 'hidden xl:flex xl:flex-col xl:gap-2',
  };
  const styledLink = {
    hero: 'flex justify-center items-center w-12 h-12 xl:w-6 xl:h-6',
    footer: 'flex',
  };

  return (
    <ul className={styled[section]}>
      {socials.map(({ label, url, ariaLabel }) => {
        return (
          <li key={label} className={styledLink[section]}>
            <a
              href={url}
              target="_blank"
              rel="noreferrer noopener nofollow"
              aria-label={ariaLabel}
              className="w-full h-full text-white/75 hover:text-white focus:text-white transition duration-300 flex justify-center items-center gap-3"
            >
              {React.createElement(icons[label], {
                className: 'w-6 h-6 fill-current',
              })}
              {section === 'footer' && (
                <span className="text-base font-light">{label}</span>
              )}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

SocialLinks.propTypes = {
  socials: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      ariaLabel: PropTypes.string.isRequired,
    }),
  ),
  section: PropTypes.string.isRequired,
};
