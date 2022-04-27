import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { createAddress, deleteAddress, retrieveAddresses, updateAddress } from '../../actions/address-actions';
import { fetchUsers } from '../../api/index';
import ButtonGroup from '../reusable-components/button-group';

const Address = () => {
  const initialCurrentAddress = {
    address_id: '',
    user_id: '',
    address: '',
  };
  const [userIds, setUserIds] = useState([]);
  const [activeForm, setActiveForm] = useState('new');
  const [currentAddress, setCurrentAddress] = useState(initialCurrentAddress);
  const addresses = useSelector((state) => state.addresses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveAddresses());
  }, [dispatch]);

  useEffect(() => {
    const fetchUserIds = async () => {
      const { data } = await fetchUsers();
      setUserIds(data.map((user) => user.user_id));
    };
    fetchUserIds();
  }, []);

  const onRowClick = (e, address) => {
    setActiveForm('edit');
    setCurrentAddress(address);
  };

  const handleChange = (e) => {
    return setCurrentAddress({ ...currentAddress, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.nativeEvent.submitter.title === 'update') {
      dispatch(updateAddress(currentAddress));
      setCurrentAddress(initialCurrentAddress);
    } else if (e.nativeEvent.submitter.title === 'delete') {
      dispatch(deleteAddress(currentAddress));
      setCurrentAddress(initialCurrentAddress);
    } else if (e.nativeEvent.submitter.title === 'create') {
      dispatch(createAddress(currentAddress));
      setCurrentAddress(initialCurrentAddress);
    } else {
      setCurrentAddress(initialCurrentAddress);
    }
    setActiveForm('new');
  };

  const { address_id, user_id, address } = currentAddress;
  return (
    <Styles>
      <Container className="p-5 cursor-pointer" fluid>
        <Row>
          <Col xs={12} lg={8}>
            {addresses && addresses.length > 0 && (
              <BootstrapTable
                hover
                keyField="address_id"
                data={addresses}
                columns={Object.keys(addresses[0]).map((key) => ({ dataField: key, text: key }))}
                rowEvents={{ onClick: onRowClick }}
              />
            )}
          </Col>
          <Col xs={12} lg={4}>
            <Form onSubmit={handleSubmit}>
              {activeForm === 'edit' && (
                <Form.Group className="mb-3">
                  <Form.Label>Address Id</Form.Label>
                  <Form.Control required value={address_id} type="text" name="address_id" onChange={handleChange} />
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
                <Form.Label>Address</Form.Label>
                <Form.Control required value={address} type="text" name="address" onChange={handleChange} />
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
    padding: 1rem;
    margin-top: var(--nav-height);
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

export default Address;
