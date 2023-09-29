import PropTypes from 'prop-types';

export const PaymentLink = ({ title, url }) => {
  return (
    <div className="flex justify-center items-center w-full md:w-[447px] xl:w-[572px] h-16 md:h-20 xl:h-[93px] rounded-10 text-base md:text-xl xl:text-[28px] font-medium leading-none cursor-pointer bg-white/90 hover:bg-white focus:bg-white">
      <a
        href={url}
        target="_blank"
        rel="noreferrer noopener nofollow"
        className="w-full h-full textGradient text-transparent bg-clip-text flex gap-3 justify-center items-center before:w-6 before:h-6 before:flex before:justify-center before:items-start before:content-[url('/icons/default-blue-waterdrop.svg')] hover:before:content-[url('/icons/hover-blue-waterdrop.svg')] focus:before:content-[url('/icons/hover-blue-waterdrop.svg')]"
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
