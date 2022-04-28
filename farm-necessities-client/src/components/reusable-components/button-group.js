import React from 'react';
import { Button, Form } from 'react-bootstrap';

const ButtonGroup = ({ activeForm }) => {
  return (
    <Form.Group className="mb-3 d-flex justify-content-around">
      {activeForm === 'new' && (
        <Button title="create" type="submit">
          Create
        </Button>
      )}
      {activeForm === 'edit' && (
        <Button title="update" type="submit">
          Update
        </Button>
      )}
      {activeForm === 'edit' && (
        <Button title="delete" type="submit" formNoValidate>
          Delete
        </Button>
      )}
      <Button title="cancel" type="submit" formNoValidate>
        Cancel
      </Button>
    </Form.Group>
  );
};

export default ButtonGroup;
