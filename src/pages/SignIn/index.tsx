import { Stack, Typography, Link, Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import {
  FormPasswordField,
  FormTextField,
  LoadingButton,
  LogoSesiSenai,
} from 'src/components';
import { useAppDispatch, useAppSelector } from 'src/redux/store';
import { login } from 'src/redux/slices';
import { loginSchema, LoginSchemaData } from 'src/validators/login';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { ThunkLoadingEnum } from 'src/interfaces';
import { Container, CustomCard, CustomForm } from './styles';

export function SignIn() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { loginLoading } = useAppSelector((state) => state.session);

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const isLoading = loginLoading === ThunkLoadingEnum.PENDING;

  const handleSignIn = async (data: LoginSchemaData) => {
    const { username, password } = data;

    const loginResponse = await dispatch(
      login({
        username,
        password,
      }),
    ).unwrap();

    if (loginResponse) navigate('/');
  };

  return (
    <Container>
      <LogoSesiSenai />
      <CustomCard>
        <CustomForm noValidate onSubmit={handleSubmit(handleSignIn)}>
          <Typography variant="overline">Entre</Typography>
          <Stack height="100%" justifyContent="space-between" mt={2}>
            <Stack gap={3}>
              <FormTextField control={control} name="username" label="E-mail" />
              <FormPasswordField
                control={control}
                name="password"
                label="Senha"
              />
              <Stack direction="row" gap={0.5} alignItems="baseline" ml={0.5}>
                <Typography>Não possui uma conta? Faça seu </Typography>
                <Link href="/auth/register" underline="always">
                  cadastro
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
