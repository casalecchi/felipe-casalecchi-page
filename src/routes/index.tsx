import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { PrivacyPolicy } from '../pages/PrivacyPolicy';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<PrivacyPolicy />} path="/privacy" />
      <Route element={<NotFound />} path="*" />
    </Routes>
  );
};
