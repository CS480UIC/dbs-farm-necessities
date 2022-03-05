// #imports
import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.css';
import About from './components/about/about';
import Auth from './components/auth/auth';
import Cart from './components/cart/cart';
import Contact from './components/contact/contact';
import Home from './components/home/home';
import Navigation from './components/navigation/navigation';
import Shop from './components/shop/shop';
// #endregion

const App = () => (
  <BrowserRouter>
    <Container fluid className="p-0">
      <Navigation />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/auth" exact element={<Auth />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/cart" exact element={<Cart />} />
        <Route path="/shop" exact element={<Shop />} />
      </Routes>
    </Container>
  </BrowserRouter>
);

export default App;
