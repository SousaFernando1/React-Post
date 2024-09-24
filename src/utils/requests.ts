import axios from 'axios';
import { openSnackbar } from 'src/redux/slices';

export function handleRequestError(error: any, dispatch: any) {
  if (axios.isAxiosError(error)) {
    if (error.message === 'Network Error') {
      dispatch(
        openSnackbar({
          message: 'Não foi possível acessar o servidor',
        }),
      );

      throw error;
    }

    dispatch(
      openSnackbar({
        message: error.response?.data.errors.message,
      }),
    );
  }

  throw error;
}
