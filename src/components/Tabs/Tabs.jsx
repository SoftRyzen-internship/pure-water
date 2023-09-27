import PropTypes from 'prop-types';

import { Private24 } from '../TabContent';
import { Mono } from '../TabContent';
import { Swift } from '../TabContent';
import { PayPal } from '../TabContent';

export const Tabs = ({ tabs }) => {
  return (
    <ul>
      {tabs.map(({ label, info }) => {
        return (
          <li
            key={label}
            id={label.toLowerCase()}
            className="hidden target:block w-[280px] md:w-[696px]  xl:w-[1220px] py-9 px-3 md:px-6 xl:py-12 xl:px-12 rounded-10 boxGradient text-white"
          >
            {label === 'Privat24' && <Private24 info={info} />}
            {label === 'Mono' && <Mono info={info} />}
            {label === 'Swift' && <Swift info={info} />}
            {label === 'PayPal' && <PayPal info={info} />}
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
