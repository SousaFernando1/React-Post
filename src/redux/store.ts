import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import {
  postSlice,
  sessionSlice,
  snackbarSlice,
  successModalSlice,
} from './slices';

export const store = configureStore({
  reducer: {
    session: sessionSlice.reducer,
    snackbar: snackbarSlice.reducer,
    post: postSlice.reducer,
    successModal: successModalSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: { warnAfter: 1024 },
      serializableCheck: false,
    }),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
