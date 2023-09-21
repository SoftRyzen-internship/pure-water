export const getFormBtnClass = (formStatus, loading) => {
  let classes = '';

  if (formStatus === 'success' || formStatus === 'error') {
    classes += 'bg-opacity-100 ';
  } else {
    classes += 'bg-opacity-90 hover:bg-opacity-100 focus:bg-opacity-100 ';
  }

  if (loading || formStatus === 'error') {
    classes += 'cursor-not-allowed ';
  } else {
    classes += 'cursor-pointer ';
  }

  classes +=
    ' flex justify-center items-center gap-2 w-full h-[50px] md:h-[62px] textGradient text-transparent bg-clip-text text-[16px] md:text-[24px] font-medium rounded-10 bg-white transition duration-300 ';

  return classes;
};
