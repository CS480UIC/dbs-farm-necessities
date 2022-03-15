import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import Categories from './categories/categories';
import Products from './products/products';

const Shop = () => {
  const defaultCategory = { category_id: 100, name: 'All Products' };
  const [activeCategory, setActiveCategory] = useState(defaultCategory.category_id);

  return (
    <Styles>
      <Container fluid>
        <Categories defaultCategory={defaultCategory} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <Products activeCategory={activeCategory} />
      </Container>
    </Styles>
  );
};

const Styles = styled.div`
  .container-fluid {
    margin-top: var(--nav-height);
    padding: 2rem;
    width: 100%;
    height: 100vh;
  }
`;

export default Shop;
