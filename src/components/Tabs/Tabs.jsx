'use client';

import { useState } from 'react';
import PropTypes from 'prop-types';

import { TabLinks } from '../TabLinks';
import { Private24 } from '../TabContent';
import { Mono } from '../TabContent';
import { Swift } from '../TabContent';
import { PayPal } from '../TabContent';

export const Tabs = ({ tabs, paymentIcons }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleActiveIndex = index => {
    setActiveIndex(index);
  };

  return (
    <div className="flex flex-col gap-6 mt-6 xl:mt:8">
      <TabLinks
        tabs={tabs}
        activeIndex={activeIndex}
        setIndex={handleActiveIndex}
      />
      <ul>
        {tabs.map(({ label, info }, index) => {
          return (
            <li
              key={label}
              id={label.toLowerCase()}
              className={
                index === activeIndex
                  ? 'tabPanelItemVisible'
                  : 'tabPanelItemHidden'
              }
            >
              {label === 'Privat24' && (
                <Private24 info={info} paymentIcons={paymentIcons} />
              )}
              {label === 'Mono' && <Mono info={info} />}
              {label === 'Swift' && (
                <Swift info={info} paymentIcons={paymentIcons} />
              )}
              {label === 'PayPal' && (
                <PayPal info={info} paymentIcons={paymentIcons} />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      info: PropTypes.object.isRequired,
    }).isRequired,
  ).isRequired,
  paymentIcons: PropTypes.shape({
    copyIcon: PropTypes.string.isRequired,
    checkIcon: PropTypes.string.isRequired,
  }).isRequired,
};
