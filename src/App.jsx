import React from 'react';
// eslint-disable-next-line import/order
import { Route, Routes } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import Home from './Pages/home';

// eslint-disable-next-line import/order
import 'react-circular-progressbar/dist/styles.css';

function App() {
  return (
    <main className=" overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
