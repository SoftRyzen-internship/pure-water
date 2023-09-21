'use client';

import { Link } from 'react-scroll';
import PropTypes from 'prop-types';

export const MakeDonateBtn = ({ title, section }) => {
  const styled = {
    hero: 'bg-white/90 hover:bg-white/100 focus:bg-white/100 bg-clip-text text-transparent textGradient',
    currentFundraising: 'bg-gradient-to-b from-sky-500/75 to-sky-700/75 hover:iconGradient focus:iconGradient text-white',
  };

  return (
    <Link
      to="donate"
      smooth={true}
      duration={500}
      className={`${styled[section]} flex justify-center items-center gap-2 rounded-10 text-xl md:text-2xl xl:text-[28px] font-medium 
      w-64 h-16 md:w-[315px] md:h-[78px] xl:w-[374px] xl:h-[93px] py-4 px-6 md:py-5 md:px-9 xl:py-6 xl:px-12 
      transition-opacity cursor-pointer`}
    >
        <span className='flex justify-center items-start w-6 h-6'>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="21" viewBox="0 0 14 21" fill="currentColor">
<path d="M7.12808 19.1088C11.9233 19.1088 12.8804 14.5898 12.6732 12.3599C11.7951 12.9717 10.8479 14.0274 9.06197 14.0274C6.39794 14.0274 5.57899 11.985 2.78668 11.985C2.39201 11.985 1.98747 12.0343 1.51386 12.1626C0.921854 15.1818 2.32294 19.1088 7.12808 19.1088ZM6.99981 20.4803C11.1044 20.4803 13.8376 17.8064 13.8376 13.8005C13.8376 11.8271 13.0679 9.8636 12.4858 8.55132C11.43 6.17341 9.77238 3.55871 8.33183 1.32881C7.98649 0.805871 7.58195 0.5 6.99981 0.5C6.41767 0.5 6.01313 0.805871 5.66779 1.32881C4.22724 3.55871 2.56961 6.17341 1.51386 8.55132C0.941587 9.8636 0.162109 11.8271 0.162109 13.8005C0.162109 17.8064 2.89522 20.4803 6.99981 20.4803ZM6.99981 18.8621C3.86216 18.8621 1.78026 16.8395 1.78026 13.8005C1.78026 12.1823 2.40188 10.6135 2.95441 9.33079C4.0595 6.73583 5.51978 4.60459 6.90114 2.52269C6.97021 2.42403 7.04915 2.42403 7.10834 2.52269C8.47983 4.60459 9.94998 6.73583 11.0353 9.32093C11.5978 10.6135 12.2293 12.1823 12.2293 13.8005C12.2293 16.8395 10.1375 18.8621 6.99981 18.8621Z"/>
</svg>
        </span>
      <span className='inline-block align-middle'>{title}</span>
    </Link>
  );
};

MakeDonateBtn.propTypes = {
  title: PropTypes.string.isRequired,
  section: PropTypes.oneOf(['hero', 'currentFundraising']).isRequired,
};
