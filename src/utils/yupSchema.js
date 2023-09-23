import * as Yup from 'yup';

export const formSchema = errors =>
  Yup.object().shape({
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
