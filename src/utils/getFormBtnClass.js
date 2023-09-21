export const getFormBtnClass = (formStatus, loading) => {
  let classes = '';

  if (formStatus === 'success' || formStatus === 'error') {
    classes += 'bg-white/100 ';
  } else {
    classes += 'bg-white/90 hover:bg-white/100 focus:bg-white/100 ';
  }

  if (loading || formStatus === 'error') {
    classes += 'cursor-not-allowed ';
  } else {
    classes += 'cursor-pointer ';
  }

  classes +=
    ' flex justify-center items-center gap-2 w-full h-[50px] md:h-[62px] textGradient text-transparent bg-clip-text text-[16px] md:text-[24px] font-medium rounded-10 transition duration-300 ';

  return classes;
};
