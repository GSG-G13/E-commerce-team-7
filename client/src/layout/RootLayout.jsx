/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import { Footer } from '../Components/Footer';

export function RootLayout() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
