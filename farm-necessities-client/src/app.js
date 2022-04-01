import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import './app.css';
import Address from './components/address/address';
import Cart from './components/cart/cart';
import Category from './components/category/category';
import Home from './components/home/home';
import Navigation from './components/navigation/navigation';
import OrderDetail from './components/order-detail/order-detail';
import OrderHistory from './components/order-history/order-history';
import PaymentDetail from './components/payment-detail/payment-detail';
import ProductCategory from './components/product-category/product-category';
import Product from './components/product/product';
import Rating from './components/rating/rating';
import Fonts from './styles/fonts';

const App = () => (
  <Styles>
    <BrowserRouter>
      <Container fluid className="p-0">
        <Navigation />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/product" exact element={<Product />} />
          <Route path="/product-category" exact element={<ProductCategory />} />
          <Route path="/category" exact element={<Category />} />
          <Route path="/rating" exact element={<Rating />} />
          <Route path="/payment-detail" exact element={<PaymentDetail />} />
          <Route path="/order-detail" exact element={<OrderDetail />} />
          <Route path="/address" exact element={<Address />} />
          <Route path="/order-history" exact element={<OrderHistory />} />
        </Routes>
      </Container>
    </BrowserRouter>
  </Styles>
);

const Styles = styled.div`
  ${Fonts}
`;

export default App;
