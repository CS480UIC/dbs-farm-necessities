import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import styled from 'styled-components';

const initialState = { name: '', email: '', password: '', confirmPassword: '' };

const Auth = () => {
  return (
    <Styles>
      <Container fluid>
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="email" placeholder="Email" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
              Password
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit">Sign in</Button>
            </Col>
          </Form.Group>
        </Form>
      </Container>
    </Styles>
  );
};

const Styles = styled.div`
  .container-fluid {
    padding: 1rem;
    margin-top: var(--nav-height);
    max-width: 600px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  form {
    width: 100%;
    margin-top: 1rem;
  }
`;

export default Auth;
