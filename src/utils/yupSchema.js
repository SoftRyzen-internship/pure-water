import * as Yup from 'yup';

export const formSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .required('This field is required')
    .min(3, 'Wrong name')
    .max(70, 'Wrong name')
    .matches(
      /^(?!.*(\s-|-\s)|.*--|.*——|.*––|.*–\s|.*\s–|.*—\s|.*\s—)[а-яА-Яa-zA-Z\s'’\-–—ЇїІіЄєҐґ]*$/,
      'Wrong name',
    ),
  phone: Yup.string()
    .required('This field is required')
    .matches(/^\+\d{11,12}$/, 'Wrong phone'),
  message: Yup.string()
    .trim()
    .required('This field is required')
    .min(3, 'Wrong message')
    .max(500, 'Wrong message'),
});
