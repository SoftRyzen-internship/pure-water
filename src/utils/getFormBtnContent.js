export const getFormBtnContent = (
  formStatus,
  sendBtn,
  sendBtnSuccess,
  sendBtnError,
  SuccessIcon,
  ErrorIcon,
) => {
  const classes = 'w-[16px] h-[16px] xl:w-[24px] xl:h-[24px]';
  if (formStatus === 'success') {
    return (
      <>
        <SuccessIcon className={classes} /> {sendBtnSuccess}
      </>
    );
  }

  if (formStatus === 'error') {
    return (
      <>
        <ErrorIcon className={classes} /> {sendBtnError}
      </>
    );
  }

  return sendBtn;
};
