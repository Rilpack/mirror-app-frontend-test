import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '@/pages/Home/HomePage';
import { MainLayout } from '@/layouts/MainLayout/MainLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [{
      index: true,
      element: <HomePage />
    }]
  },
]);
