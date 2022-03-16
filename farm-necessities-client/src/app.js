import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import './app.css';
import Cart from './components/cart/cart';
import ProductCategory from './components/product-category/product-category';
import Category from './components/category/category';
import Rating from './components/rating/rating';
import PaymentDetail from './components/payment-detail/payment-detail';
import Product from './components/product/product';
import Fonts from './styles/fonts';
import Navigation from './components/navigation/navigation'

const App = () => (
  <BrowserRouter>
    <Container fluid className="p-0">
      <Navigation/>
      <Routes>
        <Route path="/cart" exact element={<Cart />} />
        <Route path="/product" exact element={<Product />} />
        <Route path="/product-category" exact element={<ProductCategory />} />
        <Route path="/category" exact element={<Category />} />
        <Route path="/rating" exact element={<Rating />} />
        <Route path="/payment-detail" exact element={<PaymentDetail />} />
      </Routes>
    </Container>
  </BrowserRouter>
);

const Styles = styled.div`
  ${Fonts}
`;

export default App;
