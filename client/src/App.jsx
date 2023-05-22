import React from 'react';
import { NavBar, Footer, ServerError } from './Components';

function App() {
  return (
    <>
      <NavBar />
      <ServerError />
      <Footer />
    </>
  );
}

export default App;
