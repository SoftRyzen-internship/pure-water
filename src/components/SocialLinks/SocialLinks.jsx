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
      {socials.map(social => {
        return (
          <li
            key={social.label}
            className={`${styledLink[section]} text-white/75 hover:text-white focus:text-white`}
          >
            <a
              href={social.url}
              target="_blank"
              rel="noreferrer noopener nofollow"
              aria-label={social['aria-label']}
              className="flex justify-center items-center gap-3"
            >
              {React.createElement(icons[social.label], {
                className: 'w-6 h-6 fill-current',
              })}
              {section === 'footer' && (
                <span className="text-base font-light">{social.label}</span>
              )}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

SocialLinks.propTypes = {
  socials: PropTypes.shape({
    label: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    'aria-label': PropTypes.string.isRequired,
  }),
  section: PropTypes.string.isRequired,
};
