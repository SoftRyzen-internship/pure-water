import PropTypes from 'prop-types';

import TapIcon from 'public/icons/tap.svg';

export const ProjectOverlay = ({ title, styles }) => {
  return (
    <div
      className={`project-overlay absolute top-0 left-0 w-full h-full hidden xl:flex flex-col justify-center items-center bg-gradient-to-b from-[#20b1e2bf] to-[#0f5598bf] backdrop-blur-[12.5px] ${styles} opacity-0 transition-opacity`}
    >
      <div className="flex flex-col justify-center items-center">
        <TapIcon className="w-[23px] h-[30px] fill-white" />
        <p className="text-xs text-white">{title}</p>
      </div>
    </div>
  );
};

ProjectOverlay.propTypes = {
  title: PropTypes.string.isRequired,
  styles: PropTypes.string,
};
