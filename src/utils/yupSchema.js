import * as Yup from 'yup';

const url = window?.location?.href;
const errors = url.includes('uk')
  ? {
      required: 'Це поле обовʼязкове',
      wrongName: 'Неправильне імʼя',
      wrongPhone: 'Неправильний телефон',
      wrongMessage: 'Введіть від 3 до 500 символів',
    }
  : {
      required: 'This field is required',
      wrongName: 'Wrong name',
      wrongPhone: 'Wrong phone',
      wrongMessage: 'Type 3 to 500 characters',
    };

export const formSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .required(errors.required)
    .min(3, errors.wrongName)
    .max(70, errors.wrongName)
    .matches(
      /^(?!.*(\s-|-\s)|.*--|.*——|.*––|.*–\s|.*\s–|.*—\s|.*\s—)[а-яА-Яa-zA-Z\s'’\-–—ЇїІіЄєҐґ]*$/,
      errors.wrongName,
    ),
  phone: Yup.string()
    .required(errors.required)
    .matches(/^\+\d{11,12}$/, errors.wrongPhone),
  message: Yup.string()
    .trim()
    .required(errors.required)
    .min(3, errors.wrongMessage)
    .max(500, errors.wrongMessage),
});
