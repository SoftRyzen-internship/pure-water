import PropTypes from 'prop-types';

export const SectionTitle = ({ title }) => {
  return (
    <h2 className="text-transparent bg-clip-text textGradient text-[28px] md:text-[36px] xl:text-[48px] text-center leading-normal">
      {title}
    </h2>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};