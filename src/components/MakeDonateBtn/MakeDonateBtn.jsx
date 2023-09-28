'use client';

import { Link } from 'react-scroll';
import PropTypes from 'prop-types';

export const MakeDonateBtn = ({ title, section }) => {
  return (
    <div
      className={`
        ${section === 'hero' ? 'donateBtnWhiteOverlay' : 'donateBtnBlueOverlay'}
        ${section === 'currentFundraising' ? 'mx-auto xl:hidden' : ''}`}
    >
      <Link
        to="donate"
        href="/"
        smooth={true}
        duration={500}
        className={
          section === 'hero' ? 'makeDonateBtnWhite' : 'makeDonateBtnBlue'
        }
      >
        <span className="leading-none">{title}</span>
      </Link>
    </div>
  );
};

MakeDonateBtn.propTypes = {
  title: PropTypes.string.isRequired,
  section: PropTypes.oneOf(['hero', 'currentFundraising']).isRequired,
};
