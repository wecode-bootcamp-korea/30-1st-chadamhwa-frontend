import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Detail from './pages/Detail/Detail';
import Cart from './pages/Cart/Cart';
import Event from './pages/Event/Event';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
