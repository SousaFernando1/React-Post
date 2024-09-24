import { ReactNode } from 'react';
import { SnackbarProvider } from './snackbar';
import { SuccessModalProvider } from './successModal';

type Props = {
  children: ReactNode;
};

export function AppHooksProviders({ children }: Props) {
  return (
    <SnackbarProvider>
      <SuccessModalProvider>{children}</SuccessModalProvider>
    </SnackbarProvider>
  );
}
