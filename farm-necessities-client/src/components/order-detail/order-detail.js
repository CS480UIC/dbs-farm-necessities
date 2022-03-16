import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import styled from 'styled-components';

const OrderDetail = () => {
  const columns = ['Order ID', 'Product ID', 'Quantity'];
  const operations = ['Create Order Detail', 'Read Order Detail', 'Update Order Detail', 'Delete Order Detail'];
  return (
    <Styles>
      <Container fluid>
        {operations.map((operation) => (
          <div className="form-container">
            <h3>{operation}</h3>
            <Form>
              {columns.map((field) => (
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={2}>
                    {field}
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control type="text" />
                  </Col>
                </Form.Group>
              ))}
              <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 2 }}>
                  <Button type="submit">{operation}</Button>
                </Col>
              </Form.Group>
            </Form>
          </div>
        ))}
      </Container>
    </Styles>
  );
};

const Styles = styled.div`
  .container-fluid {
    padding: 1rem;
    margin-top: var(--nav-height);
    max-width: 900px;
  }

  h3 {
    margin-bottom: 2rem;
    text-align: center;
  }

  .form-container {
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 3rem;
  }
`;

export default OrderDetail;
