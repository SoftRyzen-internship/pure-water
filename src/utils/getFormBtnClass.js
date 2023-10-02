import PropTypes from 'prop-types';

export const getFormBtnClass = (formStatus, loading) => {
  let classes =
    ' flex justify-center items-center w-full h-[50px] md:h-[62px] mt-1 md:mt-0 text-[16px] md:text-[24px] font-medium leading-normal rounded-10 transition duration-300 ';

  if (formStatus === 'success') {
    classes += ' bg-white/100 ';
  } else if (formStatus === 'error' || loading) {
    classes += ' bg-white/100 cursor-not-allowed ';
  } else {
    classes +=
      ' bg-white/100 xl:bg-white/90 hover:bg-white/100 focus:bg-white/100 cursor-pointer ';
  }

  return classes;
};

getFormBtnClass.propTypes = {
  formStatus: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};
