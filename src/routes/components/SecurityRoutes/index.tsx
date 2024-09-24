import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from 'src/redux/store';

type Props = {
  children: ReactNode;
};

export function SecurityRoutes({ children }: Readonly<Props>) {
  const { user } = useAppSelector((state) => state.session);

  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }

  return children;
}
