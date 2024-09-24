import { Route, Routes } from 'react-router-dom';
import { SignIn } from 'src/pages/SignIn';
import { SignUp } from 'src/pages/SignUp';

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
    </Routes>
  );
}
