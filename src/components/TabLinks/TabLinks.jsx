'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';

export const TabLinks = ({ tabs }) => {
  const [id, setId] = useState(`#${tabs[0].label.toLowerCase()}`);

  const router = useRouter();

  useEffect(() => {
    router.push(id);
  }, []);

  return (
    <ul className="flex flex-col md:flex-row md:flex-wrap xl:flex-nowrap gap-2 md:gap-6">
      {tabs.map(tab => {
        const href = `#${tab.label.toLowerCase()}`;

        return (
          <li
            key={tab.label}
            className="w-[280px] md:w-[336px] xl:w-[287px] h-[50px] md:h-16 xl:h-[71px] text-base md:text-xl xl:text-2xl cursor-pointer group/tab"
            onClick={() => {
              setId(href);
            }}
          >
            <a
              href={href}
              className={`tabBtn relative z-10 transition-colors duration-300 ${
                id === href ? 'activeTabLink' : 'defaultTabLink'
              }`}
            >
              <span
                className={
                  id === href ? 'activeTabLinkText' : 'defaultTabLinkText'
                }
              >
                {tab.label}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

TabLinks.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      info: PropTypes.object,
    }),
  ),
};
