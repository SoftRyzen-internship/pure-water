import PropTypes from 'prop-types';

export const getFormBtnContent = (
  formStatus,
  regular,
  success,
  error,
  SuccessIcon,
  ErrorIcon,
) => {
  const classes = 'w-[16px] h-[16px] xl:w-[24px] xl:h-[24px]';

  return (
    <span className="textGradient flex items-center gap-2 text-transparent bg-clip-text">
      {formStatus === 'success' && (
        <>
          <SuccessIcon className={classes} /> {success}
        </>
      )}

      {formStatus === 'error' && (
        <>
          <ErrorIcon className={classes} /> {error}
        </>
      )}

      {!formStatus && regular}
    </span>
  );
};

getFormBtnContent.propTypes = {
  formStatus: PropTypes.string,
  regular: PropTypes.string.isRequired,
  success: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  SuccessIcon: PropTypes.func.isRequired,
  ErrorIcon: PropTypes.func.isRequired,
};
