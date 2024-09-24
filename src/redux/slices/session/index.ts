import { createSlice } from '@reduxjs/toolkit';
import { IUser, IThunkLoading, ThunkLoadingEnum } from 'src/interfaces';
import { sessionStorage } from 'src/storage';
import { login, signUp } from './thunks';

type InitialState = {
  user: IUser | null;

  loginLoading: IThunkLoading;
  signUpLoading: IThunkLoading;
};

const initialState = {
  user: sessionStorage.getUser(),

  loginLoading: ThunkLoadingEnum.IDLE,
  signUpLoading: ThunkLoadingEnum.IDLE,
} as InitialState;

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    signOut() {
      sessionStorage.clean();

      return {
        ...initialState,
        user: null,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loginLoading = ThunkLoadingEnum.PENDING;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        const { user } = payload!;

        state.user = user;
        state.loginLoading = ThunkLoadingEnum.SUCCEEDED;
      })
      .addCase(login.rejected, (state) => {
        state.loginLoading = ThunkLoadingEnum.FAILED;
      })

      .addCase(signUp.pending, (state) => {
        state.loginLoading = ThunkLoadingEnum.PENDING;
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        const { user } = payload!;

        state.user = user;
        state.signUpLoading = ThunkLoadingEnum.SUCCEEDED;
      })
      .addCase(signUp.rejected, (state) => {
        state.signUpLoading = ThunkLoadingEnum.FAILED;
      });
  },
});

export const { signOut } = sessionSlice.actions;
export * from './thunks';
