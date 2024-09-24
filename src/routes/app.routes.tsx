import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from './auth.routes';
import { RedirectLoggedUser } from './components/RedirectLoggedUser';
import { SecurityRoutes } from './components/SecurityRoutes';
import { PrivateRoutes } from './private.routes';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" replace />} />

      <Route
        path="/"
        element={
          <SecurityRoutes>
            <PrivateRoutes />
          </SecurityRoutes>
        }
      />

      <Route
        path="/auth/*"
        element={
          <RedirectLoggedUser>
            <AuthRoutes />
          </RedirectLoggedUser>
        }
      />
    </Routes>
  );
}
