import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchProducts, fetchProductsByCategory } from '../../../actions/shop-actions';
import Product from './product/product';

const Products = ({ activeCategory }) => {
  let products = useSelector((state) => state.products);
  if (activeCategory !== 100) products = products.filter((product) => product.category_id === activeCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    if (activeCategory === 100) dispatch(fetchProducts());
    else dispatch(fetchProductsByCategory(activeCategory));
  }, [dispatch, activeCategory]);

  return (
    <Styles>
      <Row>
        {products ? (
          products.map((product) => (
            <Col key={product.product_id} lg={3} md={4} sm={6} xs={12} className="p-2">
              <Product product={product} />
            </Col>
          ))
        ) : (
          <></>
        )}
      </Row>
    </Styles>
  );
};

const Styles = styled.div`
  .row {
    margin: -0.5rem !important;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
`;

export default Products;
