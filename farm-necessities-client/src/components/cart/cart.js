import React, { useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import CartItem from './cart-item/cart-item';
import { fetchCart } from '../../actions/cart-actions';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const cartLoaded = useSelector((state) => state.cartLoaded);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!cartLoaded) dispatch(fetchCart());
  }, [dispatch]);

  return (
    <Styles>
      <Container fluid>
        <Table striped bordered hover responsive size="md">
          <thead>
            <tr>
              <th>
                <h5>#</h5>
              </th>
              <th>
                <h5>Product Name</h5>
              </th>
              <th>
                <h5>Quantity</h5>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>{cart ? cart.map((item, index) => <CartItem key={index} item={{ ...item, index }} />) : <></>}</tbody>
        </Table>
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

  td {
    vertical-align: middle;
  }
`;

export default Cart;
