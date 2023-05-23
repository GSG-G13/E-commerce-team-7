import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { RootLayout } from './layout/RootLayout';
import { HomePage } from './Pages/HomePage';
import { CartPage } from './Pages/CartPage';
import { AccessForm } from './Pages/AccessForm';
import { ClientError } from './Pages/ClientError';
import ProductPage from './Pages/ProductPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'cart',
        element: <CartPage />,
      },
      {
        path: 'product/:id',
        element: <ProductPage />,
      },
    ],
  },
  {
    path: '/signin',
    element: <AccessForm endpoint="SignIn" />,
  },
  {
    path: '/signup',
    element: <AccessForm endpoint="SignUp" />,
  },
  {
    path: '*',
    element: <ClientError />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
