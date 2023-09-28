'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';

import { InputField } from '../InputField';
import { getFormBtnClass } from '@/utils/getFormBtnClass';
import { getFormBtnContent } from '@/utils/getFormBtnContent';
import { formSchema } from '@/utils/yupSchema';
import { sendMessageToTelegram } from '@/utils/sendMessageToTelegram';
import ErrorIcon from 'public/icons/error.svg';
import SuccessIcon from 'public/icons/blue-check.svg';

export const Form = ({ data }) => {
  const {
    form: { name, phone, message },
    formBtn: { regular, success, error },
    errorMsg,
  } = data;

  const [loading, setLoading] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(formSchema(errorMsg)),
  });

  const STORAGE_KEY = 'feedback_form';

  useFormPersist(STORAGE_KEY, {
    watch,
    storage: typeof window !== 'undefined' ? window.localStorage : '',
    setValue,
  });

  const onSubmit = async formData => {
    setLoading(true);
    try {
      await sendMessageToTelegram(formData);
      setFormStatus('success');
      setTimeout(() => {
        setFormStatus(null);
      }, 3000);
      reset();
    } catch (error) {
      console.error(error);
      setFormStatus('error');
      setTimeout(() => {
        setFormStatus(null);
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const timer = setTimeout(() => {
        setFormStatus(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="formGradient w-full md:w-[500px] h-[605px] md:h-[670px] flex flex-col justify-between mx-auto p-3 pt-[48px] md:py-12 md:px-9 rounded-20"
    >
      <InputField
        label={name.label}
        type="text"
        name="name"
        register={register}
        errors={errors}
        placeholder={name.placeholder}
      />
      <InputField
        label={phone.label}
        type="text"
        name="phone"
        register={register}
        errors={errors}
        placeholder={phone.placeholder}
      />
      <InputField
        label={message.label}
        type="textarea"
        name="message"
        register={register}
        errors={errors}
        placeholder={message.placeholder}
      />

      <button
        type="submit"
        className={getFormBtnClass(formStatus, loading)}
        disabled={formStatus === 'success'}
      >
        {getFormBtnContent(
          formStatus,
          regular,
          success,
          error,
          SuccessIcon,
          ErrorIcon,
        )}
      </button>
    </form>
  );
};

Form.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    form: PropTypes.shape({
      name: PropTypes.shape({
        label: PropTypes.string.isRequired,
        placeholder: PropTypes.string.isRequired,
      }).isRequired,
      phone: PropTypes.shape({
        label: PropTypes.string.isRequired,
        placeholder: PropTypes.string.isRequired,
      }).isRequired,
      message: PropTypes.shape({
        label: PropTypes.string.isRequired,
        placeholder: PropTypes.string.isRequired,
      }).isRequired,
    }),
    formBtn: PropTypes.shape({
      regular: PropTypes.string.isRequired,
      success: PropTypes.string.isRequired,
      error: PropTypes.string.isRequired,
    }).isRequired,
    errorMsg: PropTypes.shape({
      required: PropTypes.string.isRequired,
      nameShort: PropTypes.string.isRequired,
      nameLong: PropTypes.string.isRequired,
      wrongName: PropTypes.string.isRequired,
      wrongPhone: PropTypes.string.isRequired,
      wrongMessage: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
