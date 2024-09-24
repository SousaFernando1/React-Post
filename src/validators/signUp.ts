import * as yup from 'yup';

export const signUpSchema = yup.object().shape({
  username: yup.string().trim().required('Campo de e-mail é obrigatório!'),
  email: yup
    .string()
    .trim()
    .required('Campo de e-mail é obrigatório!')
    .email('Insira um e-mail válido!'),
  password: yup
    .string()
    .trim()
    .max(15, 'A senha deve ter menos de 15 caracteres!')
    .required('Campo de senha é obrigatório!'),
});

export type SignUpSchemaData = yup.InferType<typeof signUpSchema>;
