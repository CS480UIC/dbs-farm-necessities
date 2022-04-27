/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import styled from 'styled-components';
import {
  createCategory,
  deleteCategory,
  retrieveCategories,
  updateCategory,
} from '../../api/api-helpers';
import ButtonGroup from '../reusable-components/button-group';

const Category = () => {
  const initialState = {
    category_id: '',
    name: '',
    status: '',
  };
  const [categories, setCategories] = useState([]);
  const [categoryIds, setCategoryIds] = useState([]);
  const [activeForm, setActiveForm] = useState('new');
  const [currentCategory, setCurrentCategory] = useState(initialState);
  const { category_id, name, status } = currentCategory;

  useEffect(async () => {
    const allCategories = await retrieveCategories();
    allCategories &&
      Array.isArray(allCategories) &&
      setCategoryIds(allCategories.map((category) => category.category_id));
    allCategories &&
      Array.isArray(allCategories) &&
      setCategories(allCategories);
  }, []);

  const onRowClick = (e, category) => {
    setActiveForm('edit');
    setCurrentCategory(category);
  };

  const handleChange = async (e) => {
    return setCurrentCategory({
      ...currentCategory,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.nativeEvent.submitter.title === 'update') {
      const updatedCategory = await updateCategory(currentCategory);
      updatedCategory.affectedRows === 1 &&
        setCategories(
          categories.map((category) =>
            category.category_id === category_id ? currentCategory : category
          )
        );
    } else if (e.nativeEvent.submitter.title === 'delete') {
      const deletedCategory = await deleteCategory(currentCategory);
      deletedCategory.affectedRows === 1 &&
        setCategories(
          categories.filter((category) => category.category_id !== category_id)
        );
    } else if (e.nativeEvent.submitter.title === 'create') {
      const newCategory = await createCategory(currentCategory);
      newCategory.insertId &&
        setCategories([
          ...categories,
          { ...currentCategory, category_id: newCategory.insertId },
        ]);
    }
    setCurrentCategory(initialState);
    setActiveForm('new');
  };

  console.log('categories', categories);

  return (
    <Styles>
      <Container className="p-5 cursor-pointer" fluid>
        <Row>
          <Col xs={12} lg={8}>
            <h3>Category</h3>
            {categories && categories.length > 0 && (
              <BootstrapTable
                hover
                keyField="category_id"
                data={categories}
                columns={Object.keys(categories[0]).map((key) => ({
                  dataField: key,
                  text: key,
                }))}
                rowEvents={{ onClick: onRowClick }}
              />
            )}
          </Col>
          <Col xs={12} lg={4}>
            <h3>{activeForm === 'new' ? 'New' : 'Edit'}</h3>
            <Form onSubmit={handleSubmit}>
              {activeForm === 'edit' && (
                <Form.Group className="mb-3">
                  <Form.Label>Category Id</Form.Label>
                  <Form.Control
                    as={'select'}
                    required
                    value={category_id}
                    type="text"
                    name="category_id"
                    onChange={handleChange}
                  >
                    <option value=""></option>
                    {categoryIds &&
                      categoryIds.map((categoryId) => (
                        <option key={categoryId} value={categoryId}>
                          {categoryId}
                        </option>
                      ))}
                  </Form.Control>
                </Form.Group>
              )}
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  value={name}
                  type="text"
                  name="name"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Status</Form.Label>
                <Form.Control
                  as={'select'}
                  required
                  value={status}
                  type="text"
                  name="status"
                  onChange={handleChange}
                >
                  <option value=""></option>
                  {['active', 'inactive'].map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </Form.Control>
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

export default Category;
