import React, { useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchUsers } from '../../actions/users-actions';

const Users = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <Styles>
      <Container fluid>
        <h3>Users</h3>
        {users && users.length === 0 ? (
          <>
            <div>Login to view users</div>
          </>
        ) : (
          <Table striped bordered hover responsive size="md">
            <thead>
              <tr>
                <th>
                  <h5>#</h5>
                </th>
                <th>
                  <h5>User Name</h5>
                </th>
                <th>
                  <h5>Email</h5>
                </th>
                <th>
                  <h5>Phone Number</h5>
                </th>
                <th>
                  <h5>Account Type</h5>
                </th>
              </tr>
            </thead>
            <tbody>
              {users ? (
                users.map((item, index) => (
                  <tr key={index}>
                    <td>{item.user_id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone_number}</td>
                    <td>{item.account_type}</td>
                  </tr>
                ))
              ) : (
                <></>
              )}
            </tbody>
          </Table>
        )}
      </Container>
    </Styles>
  );
};

const Styles = styled.div`
  .container-fluid {
    margin-top: var(--nav-height);
    padding: 2rem;
    width: 100%;
    height: 100vh;
  }

  h3 {
    margin-bottom: 2rem;
    text-align: center;
  }

  td {
    vertical-align: middle;
  }
`;

export default Users;
