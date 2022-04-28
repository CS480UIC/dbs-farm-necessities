/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import styled from 'styled-components';
import {
  createOrderDetail,
  deleteOrderDetail,
  retrieveOrderDetails,
  updateOrderDetail,
  retrieveProducts,
  retrieveOrderHistories,
} from '../../api/api-helpers';
import ButtonGroup from '../reusable-components/button-group';

const Product = () => {
  const initialState = {
    order_detail_id: '',
    order_id: '',
    product_id: '',
    quantity: '',
  };
  const [orderDetails, setOrderDetails] = useState([]);
  const [orderIds, setOrderIds] = useState([]);
  const [productIds, setProductIds] = useState([]);
  const [activeForm, setActiveForm] = useState('new');
  const [currentOrderDetail, setCurrentOrderDetail] = useState(initialState);
  const { order_detail_id, order_id, product_id, quantity } = currentOrderDetail;

  useEffect(async () => {
    const orderIds = await retrieveOrderHistories();
    orderIds && Array.isArray(orderIds) && setOrderIds(orderIds.map((order) => order.order_id));

    const productIds = await retrieveProducts();
    productIds && Array.isArray(productIds) && setProductIds(productIds.map((product) => product.product_id));

    const allOrderDetails = await retrieveOrderDetails();
    allOrderDetails && Array.isArray(allOrderDetails) && setOrderDetails(allOrderDetails);
  }, []);

  const onRowClick = (e, product) => {
    setActiveForm('edit');
    setCurrentOrderDetail(product);
  };

  const handleChange = async (e) => {
    return setCurrentOrderDetail({ ...currentOrderDetail, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.nativeEvent.submitter.title === 'update') {
      const updatedOrderDetail = await updateOrderDetail(currentOrderDetail);
      updatedOrderDetail.affectedRows === 1 &&
        setOrderDetails(
          orderDetails.map((orderDetail) => (orderDetail.order_detail_id === order_detail_id ? currentOrderDetail : orderDetail))
        );
    } else if (e.nativeEvent.submitter.title === 'delete') {
      const deletedOrderDetail = await deleteOrderDetail(currentOrderDetail);
      deletedOrderDetail.affectedRows === 1 &&
        setOrderDetails(orderDetails.filter((orderDetail) => orderDetail.order_detail_id !== order_detail_id));
    } else if (e.nativeEvent.submitter.title === 'create') {
      const newOrderDetail = await createOrderDetail(currentOrderDetail);
      newOrderDetail.insertId && setOrderDetails([...orderDetails, { ...currentOrderDetail, order_detail_id: newOrderDetail.insertId }]);
    }
    setCurrentOrderDetail(initialState);
    setActiveForm('new');
  };

  return (
    <Styles>
      <Container className="p-5 cursor-pointer" fluid>
        <Row>
          <Col xs={12} lg={8}>
            <h3>Order Detail</h3>
            {orderDetails && orderDetails.length > 0 && (
              <BootstrapTable
                hover
                keyField="order_detail_id"
                data={orderDetails}
                columns={Object.keys(orderDetails[0]).map((key) => ({ dataField: key, text: key }))}
                rowEvents={{ onClick: onRowClick }}
              />
            )}
          </Col>
          <Col xs={12} lg={4}>
            <h3>{activeForm === 'new' ? 'New' : 'Edit'}</h3>
            <Form onSubmit={handleSubmit}>
              {activeForm === 'edit' && (
                <Form.Group className="mb-3">
                  <Form.Label>Order Detail Id</Form.Label>
                  <Form.Control required disabled value={order_detail_id} type="text" name="order_detail_id" />
                </Form.Group>
              )}
              <Form.Group className="mb-3">
                <Form.Label>Order Id</Form.Label>
                <Form.Control as={'select'} required value={order_id} type="text" name="order_id" onChange={handleChange}>
                  <option value=""></option>
                  {orderIds &&
                    orderIds.map((orderId) => (
                      <option key={orderId} value={orderId}>
                        {orderId}
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

export default Product;
