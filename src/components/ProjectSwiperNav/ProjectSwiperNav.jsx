import PropTypes from 'prop-types';

import PrevIcon from 'public/icons/arrow-left.svg';
import NextIcon from 'public/icons/arrow-right.svg';
import GalleryPrevIcon from 'public/icons/line-left.svg';
import GalleryNextIcon from 'public/icons/line-right.svg';

export const ProjectSwiperNav = ({ variant }) => {
  return (
    <div
      className={`hidden xl:flex gap-x-12 justify-center items-center mt-8 ${
        variant === 'gallery'
          ? 'absolute top-[37%] left-2/4 translate-x-[-50%] gap-x-[906px] z-10 text-[#ffffffbf] hover:text-white transition-colors'
          : ''
      }`}
    >
      <button type="button" className="prev" aria-label="previous button">
        {variant === 'cards' && <PrevIcon className="w-8 h-8" />}
        {variant === 'gallery' && (
          <GalleryPrevIcon className="w-12 h-12 fill-[currentColor]" />
        )}
      </button>
      <button type="button" className="next" aria-label="next button">
        {variant === 'cards' && <NextIcon className="w-8 h-8" />}
        {variant === 'gallery' && (
          <GalleryNextIcon className="w-12 h-12 fill-[currentColor]" />
        )}
      </button>
    </div>
  );
};

ProjectSwiperNav.propTypes = {
  variant: PropTypes.string,
};
