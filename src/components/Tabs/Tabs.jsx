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
            className="w-[280px] md:w-[696px]  xl:w-[1220px] py-9 px-3 md:px-6 xl:py-12 xl:px-12 rounded-10 boxGradient text-white hidden target:block"
          >
            {tab.label === 'Privat24' && <Private24 info={tab.info} />}
            {tab.label === 'Mono' && <Mono info={tab.info} />}
            {tab.label === 'Swift' && <Swift info={tab.info} />}
            {tab.label === 'PayPal' && <PayPal info={tab.info} />}
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
