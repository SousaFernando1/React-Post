import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser } from 'src/interfaces';
import { api } from 'src/services/api';
import { sessionStorage } from 'src/storage';
import { handleRequestError } from 'src/utils';
import { retry } from 'src/utils/promises';

type LoginParams = {
  username: string;
  password: string;
};

type LoginResponse = {
  token: string;
  user: IUser;
};

type SignUpParams = {
  username: string;
  email: string;
  password: string;
};

export const login = createAsyncThunk(
  'session/login',
  async ({ username, password }: LoginParams, { dispatch }) => {
    try {
      const { data: loginData } = await retry(
        api.backendPublic.post<LoginResponse>('/login', {
          username,
          password,
        }),
        500,
        3,
      );

      const { token, user } = loginData;

      sessionStorage.setToken(token);
      sessionStorage.setUser(user);

      return loginData;
    } catch (error: any) {
      sessionStorage.clean();
      handleRequestError(error, dispatch);
    }
  },
);

export const signUp = createAsyncThunk(
  'session/signUp',
  async ({ username, password, email }: SignUpParams, { dispatch }) => {
    try {
      const { data: loginData } = await retry(
        api.backendPublic.post<LoginResponse>('/auth/create-user', {
          username,
          email,
          password,
        }),
        500,
        3,
      );

      const { token, user } = loginData;

      sessionStorage.setToken(token);
      sessionStorage.setUser(user);

      return loginData;
    } catch (error: any) {
      sessionStorage.clean();
      handleRequestError(error, dispatch);
    }
  },
);
