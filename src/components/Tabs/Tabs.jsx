import React from 'react';
import PropTypes from 'prop-types';

import { Private24 } from '../TabContent';
import { Mono } from '../TabContent';
import { Swift } from '../TabContent';
import { PayPal } from '../TabContent';

export const Tabs = ({ tabs }) => {
  return (
    <ul>
      {tabs.map(tab => {
        return (
          <li
            key={tab.label}
            id={tab.label.toLowerCase()}
            className="w-full py-9 px-3 rounded-10 boxGradient text-white hidden target:block"
          >
            {tab.label === 'Privat24' && <Private24 />}
            {tab.label === 'Mono' && <Mono />}
            {tab.label === 'Swift' && <Swift />}
            {tab.label === 'PayPal' && <PayPal />}
          </li>
        );
      })}
    </ul>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      info: PropTypes.object.isRequired,
    }),
  ),
};
