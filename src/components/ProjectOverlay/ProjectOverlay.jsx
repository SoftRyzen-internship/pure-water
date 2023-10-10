import PropTypes from 'prop-types';

import TapIcon from 'public/icons/tap.svg';

export const ProjectOverlay = ({ title, styles = '' }) => {
  return (
    <span className={`${styles} projectOverlay`}>
      <span className="flex flex-col justify-center items-center">
        <TapIcon className="w-[23px] h-[30px] fill-white" />
        <span className="text-xs text-white">{title}</span>
      </span>
    </span>
  );
};

ProjectOverlay.propTypes = {
  title: PropTypes.string.isRequired,
  styles: PropTypes.string,
};
