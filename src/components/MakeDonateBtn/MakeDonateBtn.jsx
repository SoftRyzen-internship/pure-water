'use client';

import { Link } from 'react-scroll';
import PropTypes from 'prop-types';

export const MakeDonateBtn = ({
  title,
  section,
  currentFundClassName = '',
}) => {
  return (
    <div
      className={
        section === 'hero'
          ? 'donateBtnWhiteOverlay'
          : `donateBtnBlueOverlay ${currentFundClassName}`
      }
    >
      <Link
        to="donate"
        href="/"
        smooth={true}
        duration={500}
        offset={-40}
        className={
          section === 'hero' ? 'makeDonateBtnWhite' : 'makeDonateBtnBlue'
        }
      >
        <span className="leading-normal">{title}</span>
      </Link>
    </div>
  );
};

MakeDonateBtn.propTypes = {
  title: PropTypes.string.isRequired,
  section: PropTypes.oneOf(['hero', 'currentFundraising']).isRequired,
  currentFundClassName: PropTypes.string,
};
