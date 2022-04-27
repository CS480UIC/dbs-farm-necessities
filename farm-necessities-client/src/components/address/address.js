/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import styled from 'styled-components';
import { createAddress, deleteAddress, retrieveAddresses, retrieveUsers, updateAddress } from '../../api/api-helpers';
import ButtonGroup from '../reusable-components/button-group';

const Address = () => {
  const initialState = {
    address_id: '',
    user_id: '',
    address: '',
  };
  const [addresses, setAddresses] = useState([]);
  const [userIds, setUserIds] = useState([]);
  const [activeForm, setActiveForm] = useState('new');
  const [currentAddress, setCurrentAddress] = useState(initialState);
  const { address_id, user_id, address } = currentAddress;

  useEffect(async () => {
    const users = await retrieveUsers();
    users && Array.isArray(users) && setUserIds(users.map((user) => user.user_id));

    const allAddresses = await retrieveAddresses();
    allAddresses && Array.isArray(allAddresses) && setAddresses(allAddresses);
  }, []);

  const onRowClick = (e, address) => {
    setActiveForm('edit');
    setCurrentAddress(address);
  };

  const handleChange = async (e) => {
    return setCurrentAddress({ ...currentAddress, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (e.nativeEvent.submitter.title === 'update') {
      const updatedAddress = await updateAddress(currentAddress);
      updatedAddress.affectedRows === 1 &&
        setAddresses(addresses.map((address) => (address.address_id === address_id ? currentAddress : address)));
    } else if (e.nativeEvent.submitter.title === 'delete') {
      const deletedAddress = await deleteAddress(currentAddress);
      deletedAddress.affectedRows === 1 && setAddresses(addresses.filter((address) => address.address_id !== address_id));
    } else if (e.nativeEvent.submitter.title === 'create') {
      const newAddress = await createAddress(currentAddress);
      newAddress.insertId && setAddresses([...addresses, { ...currentAddress, address_id: newAddress.insertId }]);
    }

    setCurrentAddress(initialState);
    setActiveForm('new');
  };

  return (
    <Styles>
      <Container className="p-5 cursor-pointer" fluid>
        <Row>
          <Col xs={12} lg={8}>
            <h3>Address</h3>
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
            <h3>{activeForm === 'new' ? 'New' : 'Edit'}</h3>
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
    margin-top: var(--nav-height);
  }
`;

export default Address;
