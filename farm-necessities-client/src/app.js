import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import './app.css';
import Cart from './components/cart/cart';
import ProductCategory from './components/product-category/product-category';
import Product from './components/product/product';
import Fonts from './styles/fonts';

const App = () => (
  <BrowserRouter>
    <Container fluid className="p-0">
      <Routes>
        <Route path="/cart" exact element={<Cart />} />
        <Route path="/product" exact element={<Product />} />
        <Route path="/product-category" exact element={<ProductCategory />} />
      </Routes>
    </Container>
  </BrowserRouter>
);

const Styles = styled.div`
  ${Fonts}
`;

export default App;
