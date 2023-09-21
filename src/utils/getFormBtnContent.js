export const getFormBtnContent = (
  formStatus,
  regular,
  success,
  error,
  SuccessIcon,
  ErrorIcon,
) => {
  const classes = 'w-[16px] h-[16px] xl:w-[24px] xl:h-[24px]';
  if (formStatus === 'success') {
    return (
      <>
        <SuccessIcon className={classes} /> {success}
      </>
    );
  }

  if (formStatus === 'error') {
    return (
      <>
        <ErrorIcon className={classes} /> {error}
      </>
    );
  }

  return regular;
};
