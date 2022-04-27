import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import { retrieveViewQuery } from '../../api/api-helpers';

const QueryGroupContainer = ({ query }) => {
  const [queryResult, setQueryResult] = useState([]);

  const onButtonClick = async () => {
    const result = await retrieveViewQuery(query.name);
    result && Array.isArray(result) && setQueryResult(result);
  };

  return (
    <>
      <Row className="mb-5">
        <Col xs={10}>
          <h5>{query.query}</h5>
        </Col>
        <Col xs={2}>
          <Button title="create" type="button" onClick={onButtonClick}>
            Submit
          </Button>
        </Col>
      </Row>
      <Row>
        {queryResult && queryResult.length > 0 && (
          <BootstrapTable
            hover
            keyField={query.key}
            data={queryResult}
            columns={Object.keys(queryResult[0]).map((key) => ({ dataField: key, text: key }))}
          />
        )}
      </Row>
    </>
  );
};

export default QueryGroupContainer;
