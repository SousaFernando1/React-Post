import { Box, Stack, Typography, Link } from '@mui/material';
import { useForm } from 'react-hook-form';
import {
  FormPasswordField,
  FormTextField,
  LoadingButton,
  LogoSesiSenai,
} from 'src/components';
import { useAppDispatch, useAppSelector } from 'src/redux/store';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { ThunkLoadingEnum } from 'src/interfaces';
import { signUpSchema, SignUpSchemaData } from 'src/validators/signUp';
import { signUp } from 'src/redux/slices';
import { Container, CustomCard, CustomForm } from './styles';

export function SignUp() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { signUpLoading } = useAppSelector((state) => state.session);

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const isLoading = signUpLoading === ThunkLoadingEnum.PENDING;

  const handleSignUp = async (data: SignUpSchemaData) => {
    const { username, password, email } = data;

    const signUpResponse = await dispatch(
      signUp({
        username,
        password,
        email,
      }),
    ).unwrap();

    if (signUpResponse) navigate('/');
  };

  return (
    <Container>
      <LogoSesiSenai />
      <CustomCard>
        <CustomForm noValidate onSubmit={handleSubmit(handleSignUp)}>
          <Typography variant="overline">Registre-se</Typography>
          <Stack height="100%" justifyContent="space-between" mt={2}>
            <Stack gap={3}>
              <FormTextField
                control={control}
                name="username"
                label="Usuário"
              />
              <FormTextField control={control} name="email" label="E-mail" />
              <FormPasswordField
                control={control}
                name="password"
                label="Senha"
              />
              <Stack direction="row" gap={0.5} alignItems="baseline" ml={0.5}>
                <Typography>Já possui uma conta? Faça seu </Typography>
                <Link href="/auth/login" underline="always">
                  login
                </Link>
              </Stack>
            </Stack>

            <Box mb={3}>
              <LoadingButton
                fullWidth
                loading={isLoading}
                variant="contained"
                color="primary"
                type="submit"
              >
                Salvar
              </LoadingButton>
            </Box>
          </Stack>
        </CustomForm>
      </CustomCard>
    </Container>
  );
}
