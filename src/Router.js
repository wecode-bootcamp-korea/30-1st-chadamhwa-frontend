import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Detail from './pages/Detail/Detail';
import Cart from './pages/Cart/Cart';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
