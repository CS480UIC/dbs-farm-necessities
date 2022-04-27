/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import styled from 'styled-components';
import {
  createPaymentDetail,
  deletePaymentDetail,
  retrievePaymentDetails,
  updatePaymentDetail,
  retrieveUsers,
} from '../../api/api-helpers';
import ButtonGroup from '../reusable-components/button-group';

const PaymentDetail = () => {
  const initialState = {
    payment_id: '',
    user_id: '',
    card_number: '',
  };
  const [paymentDetails, setPaymentDetails] = useState([]);
  const [userIds, setUserIds] = useState([]);
  const [activeForm, setActiveForm] = useState('new');
  const [currentPaymentDetail, setCurrentPaymentDetail] =
    useState(initialState);
  const { payment_id, user_id, card_number } = currentPaymentDetail;

  useEffect(async () => {
    const users = await retrieveUsers();
    users &&
      Array.isArray(users) &&
      setUserIds(users.map((user) => user.user_id));

    const allPaymentDetails = await retrievePaymentDetails();
    allPaymentDetails &&
      Array.isArray(allPaymentDetails) &&
      setPaymentDetails(allPaymentDetails);
  }, []);

  const onRowClick = (e, paymentDetail) => {
    setActiveForm('edit');
    setCurrentPaymentDetail(paymentDetail);
  };

  const handleChange = async (e) => {
    return setCurrentPaymentDetail({
      ...currentPaymentDetail,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.nativeEvent.submitter.title === 'update') {
      const updatedPaymentDetail = await updatePaymentDetail(
        currentPaymentDetail
      );
      updatedPaymentDetail.affectedRows === 1 &&
        setPaymentDetails(
          paymentDetails.map((paymentDetail) =>
            paymentDetail.payment_id === payment_id
              ? currentPaymentDetail
              : paymentDetail
          )
        );
    } else if (e.nativeEvent.submitter.title === 'delete') {
      const deletedPaymentDetail = await deletePaymentDetail(
        currentPaymentDetail
      );
      deletedPaymentDetail.affectedRows === 1 &&
        setPaymentDetails(
          paymentDetails.filter(
            (paymentDetail) => paymentDetail.payment_id !== payment_id
          )
        );
    } else if (e.nativeEvent.submitter.title === 'create') {
      const newPaymentDetail = await createPaymentDetail(currentPaymentDetail);
      newPaymentDetail.insertId &&
        setPaymentDetails([
          ...paymentDetails,
          { ...currentPaymentDetail, payment_id: newPaymentDetail.insertId },
        ]);
    }
    setCurrentPaymentDetail(initialState);
    setActiveForm('new');
  };

  console.log('paymentDetails', paymentDetails);

  return (
    <Styles>
      <Container className="p-5 cursor-pointer" fluid>
        <Row>
          <Col xs={12} lg={8}>
            <h3>Payment Detail</h3>
            {paymentDetails && paymentDetails.length > 0 && (
              <BootstrapTable
                hover
                keyField="payment_id"
                data={paymentDetails}
                columns={Object.keys(paymentDetails[0]).map((key) => ({
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
                  <Form.Label>Payment Id</Form.Label>
                  <Form.Control
                    required
                    disabled
                    value={payment_id}
                    type="text"
                    name="payment_id"
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
                <Form.Label>Card Number</Form.Label>
                <Form.Control
                  required
                  value={card_number}
                  type="text"
                  name="card_number"
                  onChange={handleChange}
                ></Form.Control>
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

export default PaymentDetail;
