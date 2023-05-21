import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from './loader/Loader';
import Navigation from './navigation/Navigation';

export const Layout = () => {
  return (
    <>
      <Navigation />

      <Suspense fallback={<Loader margin={'40px'} />}>
        <Outlet />
      </Suspense>
    </>
  );
};
