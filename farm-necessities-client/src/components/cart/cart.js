/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import styled from 'styled-components';
import { createCart, deleteCart, retrieveCarts, retrieveUsers, updateCart, retrieveProducts } from '../../api/api-helpers';
import ButtonGroup from '../reusable-components/button-group';

const Cart = () => {
  const initialState = {
    cart_id: '',
    user_id: '',
    product_id: '',
    quantity: '',
  };
  const [carts, setCarts] = useState([]);
  const [userIds, setUserIds] = useState([]);
  const [productIds, setProductIds] = useState([]);
  const [activeForm, setActiveForm] = useState('new');
  const [currentCart, setCurrentCart] = useState(initialState);
  const { cart_id, user_id, product_id, quantity } = currentCart;

  useEffect(async () => {
    const users = await retrieveUsers();
    users && Array.isArray(users) && setUserIds(users.map((user) => user.user_id));

    const products = await retrieveProducts();
    products && Array.isArray(products) && setProductIds(products.map((product) => product.product_id));

    const allCarts = await retrieveCarts();
    allCarts && Array.isArray(allCarts) && setCarts(allCarts);
  }, []);

  const onRowClick = (e, cart) => {
    setActiveForm('edit');
    setCurrentCart(cart);
  };

  const handleChange = async (e) => {
    return setCurrentCart({ ...currentCart, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (e.nativeEvent.submitter.title === 'update') {
      const updatedCart = await updateCart(currentCart);
      updatedCart.affectedRows === 1 && setCarts(carts.map((cart) => (cart.cart_id === cart_id ? currentCart : cart)));
    } else if (e.nativeEvent.submitter.title === 'delete') {
      const deletedCart = await deleteCart(currentCart);
      deletedCart.affectedRows === 1 && setCarts(carts.filter((cart) => cart.cart_id !== cart_id));
    } else if (e.nativeEvent.submitter.title === 'create') {
      const newCart = await createCart(currentCart);
      newCart.insertId && setCarts([...carts, { ...currentCart, cart_id: newCart.insertId }]);
    }

    setCurrentCart(initialState);
    setActiveForm('new');
  };

  return (
    <Styles>
      <Container className="p-5 cursor-pointer" fluid>
        <Row>
          <Col xs={12} lg={8}>
            <h3>Cart</h3>
            {carts && carts.length > 0 && (
              <BootstrapTable
                hover
                keyField="cart_id"
                data={carts}
                columns={Object.keys(carts[0]).map((key) => ({ dataField: key, text: key }))}
                rowEvents={{ onClick: onRowClick }}
              />
            )}
          </Col>
          <Col xs={12} lg={4}>
            <h3>{activeForm === 'new' ? 'New' : 'Edit'}</h3>
            <Form onSubmit={handleSubmit}>
              {activeForm === 'edit' && (
                <Form.Group className="mb-3">
                  <Form.Label>Cart Id</Form.Label>
                  <Form.Control required disabled value={cart_id} type="text" name="cart_id" />
                </Form.Group>
              )}
              <Form.Group className="mb-3">
                <Form.Label>User Id</Form.Label>
                <Form.Control as={'select'} required value={user_id} type="text" name="user_id" onChange={handleChange}>
                  <option value=""></option>
                  {userIds &&
                    userIds.map((userId) => (
                      <option key={userId} value={userId}>
                        {userId}
                      </option>
                    ))}
                </Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Product Id</Form.Label>
                <Form.Control as={'select'} required value={product_id} type="text" name="product_id" onChange={handleChange}>
                  <option value=""></option>
                  {productIds &&
                    productIds.map((productId) => (
                      <option key={productId} value={productId}>
                        {productId}
                      </option>
                    ))}
                </Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  required
                  value={quantity}
                  type="number"
                  name="quantity"
                  onChange={handleChange}
                  onWheel={(e) => e.target.blur()}
                />
              </Form.Group>
              <ButtonGroup activeForm={activeForm} />
            </Form>
          </Col>
        </Row>
      </Container>
    </Styles>
  );
};

const Styles = styled.div`
  .container-fluid {
    margin-top: var(--nav-height);
  }
`;

export default Cart;
