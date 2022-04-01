import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import styled from 'styled-components';

const Rating = () => {
  const columns = ['User ID', 'Product ID', 'Rating', 'Review'];
  const operations = ['Create Rating', 'Read Rating', 'Update Rating', 'Delete Rating'];
  return (
    <Styles>
      <Container fluid>
        {operations.map((operation) => (
          <div className="form-container" key={operation}>
            <h3>{operation}</h3>
            <Form>
              {columns.map((field) => (
                <Form.Group as={Row} className="mb-3" key={field}>
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

export default Rating;
