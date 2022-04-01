import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { login, signup } from '../../actions/auth-actions';

const initialState = { name: '', email: '', password: '', phone_number: '', account_type: '' };

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();
  const history = useNavigate();

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(signup(form, history));
    } else {
      dispatch(login(form, history));
    }
  };

  const handleChange = (e) => {
    return setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Styles>
      <Container fluid>
        <h3>{isSignup ? 'Sign Up' : 'Log In'}</h3>
        <Form onSubmit={handleSubmit}>
          {isSignup && (
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>
                Name
              </Form.Label>
              <Col sm={10}>
                <Form.Control required name="name" type="text" onChange={handleChange} />
              </Col>
            </Form.Group>
          )}

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control required name="email" type="email" onChange={handleChange} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Password
            </Form.Label>
            <Col sm={10}>
              <Form.Control required name="password" type="password" onChange={handleChange} />
            </Col>
          </Form.Group>

          {isSignup && (
            <>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  Phone Number
                </Form.Label>
                <Col sm={10}>
                  <Form.Control required name="phone_number" type="text" onChange={handleChange} />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  Account type
                </Form.Label>
                <Col sm={10}>
                  <Form.Control name="account_type" as={'select'} required onChange={handleChange}>
                    <option></option>
                    <option>seller</option>
                    <option>buyer</option>
                  </Form.Control>
                </Col>
              </Form.Group>
            </>
          )}
          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit">{isSignup ? 'Sign Up' : 'Log In'}</Button>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <div className="btn-link text-primary" onClick={switchMode}>
                {isSignup ? 'Already have an account? Log In' : "Don't have an account? Sign Up"}
              </div>
            </Col>
          </Form.Group>
        </Form>
      </Container>
    </Styles>
  );
};

const Styles = styled.div`
  .container-fluid {
    padding: 2rem;
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

  .btn-link {
    cursor: pointer;
  }
`;

export default Auth;
