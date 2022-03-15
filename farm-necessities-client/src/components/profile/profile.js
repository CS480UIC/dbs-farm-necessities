import React, { useEffect } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchProfile } from '../../actions/profile-actions';
import PastOrders from './past-orders/past-orders';

const Profile = () => {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  return (
    <Styles>
      <Container fluid>
        <h4>Personal Details</h4>
        <Form>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" readOnly disabled defaultValue={profile.name} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              E-mail
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" readOnly disabled defaultValue={profile.email} />
            </Col>
          </Form.Group>
          {profile?.address ? (
            profile.address.map((addr, index) => (
              <Form.Group key={index} as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  {`Address ${index + 1}`}
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="text" readOnly disabled defaultValue={addr} />
                </Col>
              </Form.Group>
            ))
          ) : (
            <></>
          )}
          {profile?.card_number ? (
            profile.card_number.map((card, index) => (
              <Form.Group key={index} as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  {`Credit Card ${index + 1}`}
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="text" readOnly disabled defaultValue={card.replace(/^.{12}/g, '************')} />
                </Col>
              </Form.Group>
            ))
          ) : (
            <></>
          )}
        </Form>
        <PastOrders />
      </Container>
    </Styles>
  );
};

const Styles = styled.div`
  .container-fluid {
    margin-top: var(--nav-height);
    padding: 2rem;
    max-width: 1000px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  form {
    width: 100%;
    margin-top: 1rem;
  }
`;

export default Profile;
