import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchPastOrders } from '../../../actions/profile-actions';
import PastOrderItem from './past-order-item/past-order-item';

const PastOrders = () => {
  const pastOrders = useSelector((state) => state.pastOrders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPastOrders());
  }, [dispatch]);

  return (
    <Styles>
      <h4>Past Orders</h4>
      <Table striped bordered hover responsive size="md" className="mt-3 w-100">
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
          </tr>
        </thead>
        <tbody>{pastOrders ? pastOrders.map((item, index) => <PastOrderItem key={index} item={{ ...item, index }} />) : <></>}</tbody>
      </Table>
    </Styles>
  );
};

const Styles = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  td {
    vertical-align: middle;
  }
`;

export default PastOrders;
