import PropTypes from 'prop-types';

export const PaymentLink = ({ title, url }) => {
  return (
    <div className="w-full md:w-[447px] xl:w-[572px] py-4 px-11 md:py-6 md:px-12 rounded-10 text-base md:text-xl xl:text-[28px] font-medium leading-none cursor-pointer bg-white/90 hover:bg-white focus:bg-white">
      <a
        href={url}
        target="_blank"
        rel="noreferrer noopener nofollow"
        className="w-full textGradient text-transparent bg-clip-text flex gap-3 md:gap-0 justify-center md:justify-between items-center before:w-6 before:h-6 before:flex before:justify-center before:items-start before:content-[url('/icons/default-blue-waterdrop.svg')] hover:before:content-[url('/icons/hover-blue-waterdrop.svg')] focus:before:content-[url('/icons/hover-blue-waterdrop.svg')]"
      >
        {title}
      </a>
    </div>
  );
};

PaymentLink.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
