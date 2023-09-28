import PropTypes from 'prop-types';

export const CreatedBy = ({ createdBy }) => {
  const { label, link, url } = createdBy;
  return (
    <div className="text-xs font-light xl:absolute xl:bottom-0 xl:left-[-312px]">
      <span className="mr-1">{label}</span>
      <a
        href={url}
        target="_blank"
        rel="noreferrer noopener nofollow"
        className="w-full f-full text-white/75 hover:text-white focus:text-white transition duration-300"
      >
        {link}
      </a>
    </div>
  );
};

CreatedBy.propTypes = {
  createdBy: PropTypes.shape({
    label: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};
