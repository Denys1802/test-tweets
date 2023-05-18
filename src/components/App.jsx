import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const Layout = lazy(() => import('./Layout'));
const Home = lazy(() => import('../pages/home/Home'));
const Card = lazy(() => import('../pages/card/Card'));
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route index element={<Home />} />
      <Route path="/tweets" element={<Card />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
