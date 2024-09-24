import { Route, Routes } from 'react-router-dom';
import { Layout } from 'src/components';
import { Home } from 'src/pages';

export function PrivateRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
