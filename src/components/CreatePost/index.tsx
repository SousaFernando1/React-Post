import { Box, Button, Stack, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { createPostSchema } from 'src/validators';
import { muiResponsiveValues } from 'src/utils';
import { ICreatePost } from 'src/interfaces/post/post';
import { FormTextField } from '../FormTextField';
import { CustomCard, CustomForm } from './styles';

type Props = {
  onCreatePost: (newPost: ICreatePost) => void;
};
export function CreatePost({ onCreatePost }: Readonly<Props>) {
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(createPostSchema),
    defaultValues: {
      title: '',
      description: '',
    },
  });

  const handleFormSubmit = (newPost: ICreatePost) => {
    reset();
    onCreatePost(newPost);
  };

  return (
    <Box minWidth={muiResponsiveValues('80%', '30rem')} height="auto">
      <CustomCard>
        <Stack alignItems="center" gap={3}>
          <Typography variant="button" fontWeight={700}>
            Crie seu post!
          </Typography>
          <CustomForm noValidate onSubmit={handleSubmit(handleFormSubmit)}>
            <Stack gap={3} flex={1}>
              <FormTextField
                fullWidth
                control={control}
                name="title"
                label="Título"
              />
              <FormTextField
                fullWidth
                multiline
                rows={4}
                control={control}
                name="description"
                label="Descrição"
              />
              <Box textAlign="end">
                <Button type="submit" variant="contained">
                  Criar
                </Button>
              </Box>
            </Stack>
          </CustomForm>
        </Stack>
      </CustomCard>
    </Box>
  );
}
