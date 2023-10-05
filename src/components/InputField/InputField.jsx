import PropTypes from 'prop-types';

export const InputField = ({
  label,
  type,
  name,
  register,
  errors,
  placeholder,
}) => {
  return (
    <div className="relative flex flex-col gap-1 pb-6 text-white">
      <label htmlFor={name} className="text-[16px]">
        {label} *
      </label>

      {type === 'textarea' && (
        <textarea
          id={name}
          {...register(name)}
          placeholder={placeholder}
          className={`${
            errors[name] ? 'border-pink' : 'border-white/25'
          } border outline-white rounded-10 p-2 h-[216px] md:h-[201px] text-[16px] md:text-[24px] font-light leading-normal bg-transparent placeholder-white/25 resize-none`}
        />
      )}

      {type !== 'textarea' && (
        <input
          id={name}
          {...register(name)}
          type={type}
          className={`${
            errors[name] ? 'border-b-pink' : 'border-b-white/25'
          } input-field border-b outline-white pb-1 text-[16px] md:text-[24px] font-light leading-normal bg-transparent placeholder-white/25 focus:pl-2 transition-all duration-300`}
          placeholder={placeholder}
        />
      )}

      {errors[name] && (
        <p className="absolute bottom-0 right-0 text-[12px] leading-normal">
          {errors[name].message}
        </p>
      )}
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object,
  placeholder: PropTypes.string.isRequired,
};
