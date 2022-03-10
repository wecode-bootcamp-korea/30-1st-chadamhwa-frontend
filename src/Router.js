import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Products from './pages/Products/Product';
import Detail from './pages/Detail/Detail';
import Event from './pages/Event/Event';
import Cart from './pages/Cart/Cart';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Signup from './pages/Login/Signup/Signup';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        {/* <Route path="/" element={<Main />} /> */}
        <Route path="/login" element={<Login />} />
        {/* <Route path="/products" element={<Products />} /> */}
        {/* <Route path="/products/:id" element={<Detail />} /> */}
        <Route path="/detail" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/event" element={<Event />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
