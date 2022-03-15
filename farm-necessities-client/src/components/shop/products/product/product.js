import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addToCart } from '../../../../actions/cart-actions';

const Product = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <Styles>
      <Card>
        <div className="card-img-container">
          <Card.Img variant="top" src={product.image} />
        </div>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Button variant="primary" onClick={() => dispatch(addToCart(product))}>
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </Styles>
  );
};

const Styles = styled.div`
  height: 100%;

  .card {
    height: 100%;
    transition: var(--transition);
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
  }

  .card:hover {
    transform: translateY(-10px);
  }

  .card-img-container {
    position: relative;
    width: 100%;
  }

  .card-img-container:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }

  .card-img-container img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .card-body a {
    position: static;
  }

  .card-body a::before {
    content: '';
    display: block;
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
  }

  .card-text {
    font-size: 17px;
  }

  .card-header,
  .card-footer {
    background: none;
    border: none;
  }

  .card-header span a {
    z-index: 1;
  }
`;

export default Product;
