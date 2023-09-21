'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';

import { InputField } from '../InputField';
import ErrorIcon from 'public/icons/error.svg';
import SuccessIcon from 'public/icons/blue-check.svg';
import { getFormBtnClass } from '@/utils/getFormBtnClass';
import { getFormBtnContent } from '@/utils/getFormBtnContent';
import { formSchema } from '@/utils/yupSchema';
import { sendMessageToTelegram } from '@/utils/sendMessageToTelegram';

export const Form = ({ data }) => {
  const { form, formBtn } = data;
  const { name, phone, message } = form;
  const { regular, success, error } = formBtn;

  const [loading, setLoading] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  const buttonClasses = getFormBtnClass(formStatus, loading);
  const buttonContent = getFormBtnContent(
    formStatus,
    regular,
    success,
    error,
    SuccessIcon,
    ErrorIcon,
  );

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(formSchema),
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
      setFormStatus('error');
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
        className={buttonClasses}
        disabled={loading || formStatus === 'error' || formStatus === 'success'}
      >
        <span className="textGradient flex items-center gap-2 text-transparent bg-clip-text">
          {buttonContent}
        </span>
      </button>
    </form>
  );
};

Form.propTypes = {
  data: PropTypes.object.isRequired,
};
