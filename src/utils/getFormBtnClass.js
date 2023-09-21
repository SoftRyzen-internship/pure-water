export const getFormBtnClass = (formStatus, loading) => {
  let classes = '';

  if (formStatus === 'success' || formStatus === 'error') {
    classes += 'bg-white/100 ';
  } else {
    classes +=
      'bg-white/100 xl:bg-white/90 hover:bg-white/100 focus:bg-white/100 ';
  }

  if (loading || formStatus === 'error') {
    classes += 'cursor-not-allowed ';
  } else {
    classes += 'cursor-pointer ';
  }

  classes +=
    ' flex justify-center items-center w-full h-[50px] md:h-[62px] mt-1 md:mt-0 text-[16px] md:text-[24px] font-medium leading-normal rounded-10 transition duration-300 ';

  return classes;
};
