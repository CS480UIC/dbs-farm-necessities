/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import styled from 'styled-components';
import {
  createOrderHistory,
  deleteOrderHistory,
  retrieveAddresses,
  retrieveOrderHistories,
  retrieveUsers,
  updateOrderHistory,
  retrievePaymentDetails,
} from '../../api/api-helpers.js';
import ButtonGroup from '../reusable-components/button-group';

const OrderHistory = () => {
  const initialState = {
    order_id: '',
    user_id: '',
    payment_id: '',
    address_id: '',
    delivery_date: '',
  };
  const [orderHistories, setOrderHistories] = useState([]);
  const [userIds, setUserIds] = useState([]);
  const [paymentIds, setPaymentIds] = useState([]);
  const [addressIds, setAddressIds] = useState([]);
  const [activeForm, setActiveForm] = useState('new');
  const [currentOrderHistory, setCurrentOrderHistory] = useState(initialState);
  const { order_id, user_id, payment_id, address_id, delivery_date } =
    currentOrderHistory;

  useEffect(async () => {
    const users = await retrieveUsers();
    users &&
      Array.isArray(users) &&
      setUserIds(users.map((user) => user.user_id));

    const payments = await retrievePaymentDetails();
    payments &&
      Array.isArray(payments) &&
      setPaymentIds(payments.map((payment) => payment.payment_id));

    const addresses = await retrieveAddresses();
    addresses &&
      Array.isArray(addresses) &&
      setAddressIds(addresses.map((address) => address.address_id));

    const allOrderHistories = await retrieveOrderHistories();
    allOrderHistories &&
      Array.isArray(allOrderHistories) &&
      setOrderHistories(allOrderHistories);
  }, []);

  const onRowClick = (e, orderHistory) => {
    setActiveForm('edit');
    setCurrentOrderHistory(orderHistory);
  };

  const handleChange = async (e) => {
    return setCurrentOrderHistory({
      ...currentOrderHistory,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (e.nativeEvent.submitter.title === 'update') {
      const updatedOrderHistory = await updateOrderHistory(currentOrderHistory);
      updatedOrderHistory.affectedRows === 1 &&
        setOrderHistories(
          orderHistories.map((orderHistory) =>
            orderHistory.order_id === order_id
              ? currentOrderHistory
              : orderHistory
          )
        );
    } else if (e.nativeEvent.submitter.title === 'delete') {
      const deletedOrderHistory = await deleteOrderHistory(currentOrderHistory);
      deletedOrderHistory.affectedRows === 1 &&
        setOrderHistories(
          orderHistories.filter(
            (orderHistory) => orderHistory.order_id !== order_id
          )
        );
    } else if (e.nativeEvent.submitter.title === 'create') {
      const newOrderHistory = await createOrderHistory(currentOrderHistory);
      newOrderHistory.insertId &&
        setOrderHistories([
          ...orderHistories,
          { ...currentOrderHistory, order_id: newOrderHistory.insertId },
        ]);
    }

    setCurrentOrderHistory(initialState);
    setActiveForm('new');
  };

  return (
    <Styles>
      <Container className="p-5 cursor-pointer" fluid>
        <Row>
          <Col xs={12} lg={8}>
            <h3>Order History</h3>
            {orderHistories && orderHistories.length > 0 && (
              <BootstrapTable
                hover
                keyField="order_id"
                data={orderHistories}
                columns={Object.keys(orderHistories[0]).map((key) => ({
                  dataField: key,
                  text: key,
                }))}
                rowEvents={{ onClick: onRowClick }}
              />
            )}
          </Col>
          <Col xs={12} lg={4}>
            <h3>{activeForm === 'new' ? 'New' : 'Edit'}</h3>
            <Form onSubmit={handleSubmit}>
              {activeForm === 'edit' && (
                <Form.Group className="mb-3">
                  <Form.Label>Order Id</Form.Label>
                  <Form.Control
                    required
                    value={order_id}
                    type="text"
                    name="order_id"
                    onChange={handleChange}
                  />
                </Form.Group>
              )}
              <Form.Group className="mb-3">
                <Form.Label>User Id</Form.Label>
                <Form.Control
                  as={'select'}
                  required
                  value={user_id}
                  type="text"
                  name="user_id"
                  onChange={handleChange}
                >
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
                <Form.Label>Payment Id</Form.Label>
                <Form.Control
                  as={'select'}
                  required
                  value={payment_id}
                  type="text"
                  name="payment_id"
                  onChange={handleChange}
                >
                  <option value=""></option>
                  {paymentIds &&
                    paymentIds.map((paymentId) => (
                      <option key={paymentId} value={paymentId}>
                        {paymentId}
                      </option>
                    ))}
                </Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Address Id</Form.Label>
                <Form.Control
                  as={'select'}
                  required
                  value={address_id}
                  type="text"
                  name="address_id"
                  onChange={handleChange}
                >
                  <option value=""></option>
                  {addressIds &&
                    addressIds.map((addressId) => (
                      <option key={addressId} value={addressId}>
                        {addressId}
                      </option>
                    ))}
                </Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Delivery Date</Form.Label>
                <Form.Control
                  required
                  value={delivery_date}
                  type="date"
                  name="delivery_date"
                  onChange={handleChange}
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

export default OrderHistory;
