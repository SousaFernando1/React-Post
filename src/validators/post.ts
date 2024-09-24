import * as yup from 'yup';

export const createPostSchema = yup.object().shape({
  title: yup.string().required('Campo de título é obrigatório!'),
  description: yup.string().required('Campo de descrição é obrigatório!'),
});

export type CreatePostSchemaData = yup.InferType<typeof createPostSchema>;
