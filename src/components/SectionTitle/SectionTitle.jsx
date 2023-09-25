import PropTypes from 'prop-types';

export const SectionTitle = ({ title, className = '' }) => {
  return (
    <h2
      className={`${className} textGradient text-transparent bg-clip-text text-[28px] md:text-[36px] xl:text-[48px] text-center leading-normal uppercase mb-6 xl:mb-8`}
    >
      {title}
    </h2>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};
