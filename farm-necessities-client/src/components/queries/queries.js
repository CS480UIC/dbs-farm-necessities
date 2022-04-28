import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { queries } from '../../constants/queries';
import QueryGroupContainer from './query-group-container';

const Queries = () => {
  return (
    <Styles>
      <Container className="p-5 cursor-pointer" fluid>
        {queries.map((query) => (
          <QueryGroupContainer key={query.name} query={query} />
        ))}
      </Container>
    </Styles>
  );
};

const Styles = styled.div`
  .container-fluid {
    margin-top: var(--nav-height);
  }
`;

export default Queries;
