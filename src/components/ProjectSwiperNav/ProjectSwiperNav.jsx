import PrevIcon from 'public/icons/arrow-left.svg';
import NextIcon from 'public/icons/arrow-right.svg';

export const ProjectSwiperNav = () => {
  return (
    <div className="hidden xl:flex gap-x-12 justify-center items-center mt-8">
      <button type="button" className="prev">
        <PrevIcon className="w-8 h-8" />
      </button>
      <button type="button" className="next">
        <NextIcon className="w-8 h-8" />
      </button>
    </div>
  );
};
