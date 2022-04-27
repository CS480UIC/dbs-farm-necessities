import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import styled from 'styled-components';
import { createProductCategory, deleteProductCategory, retrieveProductCategories, retrieveCategories, updateProductCategory,retrieveProducts } from '../../api/api-helpers';
import ButtonGroup from '../reusable-components/button-group';

const ProductCategory = () => {
  const initialState = {
    product_category_id: '',
    category_id:'',
    product_id: '',
  };
  const [productCategories, setProductCategories] = useState([]);
  const [categoryIds, setCategoryIds] = useState([]);
  const [productIds, setProductIds] = useState([]);
  const [activeForm, setActiveForm] = useState('new');
  const [currentProductCategory, setCurrentProductCategory] = useState(initialState);
  const { product_category_id,product_id,category_id } = currentProductCategory;

  useEffect(async () => {
    const categories = await retrieveCategories();
    categories && Array.isArray(categories) && setCategoryIds(categories.map((category) => category.category_id));
    const products = await retrieveProducts();
    products && Array.isArray(products) && setProductIds(products.map((product) => product.product_id));
    const allProductCategories = await retrieveProductCategories();
    allProductCategories && Array.isArray(allProductCategories) && setProductCategories(allProductCategories);
  }, []);

  const onRowClick = (e, productCategory) => {
    setActiveForm('edit');
    setCurrentProductCategory(productCategory);
  };

  const handleChange = async (e) => {
    return setCurrentProductCategory({ ...currentProductCategory, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.nativeEvent.submitter.title === 'update') {
      const updatedProductCategory = await updateProductCategory(currentProductCategory);
      updatedProductCategory.affectedRows === 1 &&
      setProductCategories(productCategories.map((productCategory) => (productCategory.product_category_id === product_category_id ? currentProductCategory : productCategory)));
    } else if (e.nativeEvent.submitter.title === 'delete') {
      const deletedProductCategory = await deleteProductCategory(currentProductCategory);
      deletedProductCategory.affectedRows === 1 && setProductCategories(productCategories.filter((productCategory) => productCategory.product_category_id !== product_category_id));
    } else if (e.nativeEvent.submitter.title === 'create') {
      const newProductCategory = await createProductCategory(currentProductCategory);
      newProductCategory.insertId && setProductCategories([...productCategories, { ...currentProductCategory, product_category_id: newProductCategory.insertId }]);
    }
    setCurrentProductCategory(initialState);
    setActiveForm('new');
  };

  console.log('products', productCategories);

  return (
    <Styles>
      <Container className="p-5 cursor-pointer" fluid>
        <Row>
          <Col xs={12} lg={8}>
            <h3>Product Categoires</h3>
            {productCategories && productCategories.length > 0 && (
              <BootstrapTable
                hover
                keyField="product_category_id"
                data={productCategories}
                columns={Object.keys(productCategories[0]).map((key) => ({ dataField: key, text: key }))}
                rowEvents={{ onClick: onRowClick }}
              />
            )}
          </Col>
          <Col xs={12} lg={4}>
            <h3>{activeForm === 'new' ? 'New' : 'Edit'}</h3>
            <Form onSubmit={handleSubmit}>
              {activeForm === 'edit' && (
                <Form.Group className="mb-3">
                  <Form.Label>Product-Category Id</Form.Label>
                  <Form.Control readOnly required value={product_category_id} type="text" name="product_category_id"/>
                </Form.Group>
              )}
              <Form.Group className="mb-3">
                <Form.Label>Product Id</Form.Label>
                <Form.Control as={'select'} required value={product_id} type="text" name="product_id" onChange={handleChange}>
                  <option value=""></option>
                  {productIds &&
                    productIds.map((productId) => (
                      <option key={productId} value={productId}>
                        {productId}
                      </option>
                    ))}
                </Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Category Id</Form.Label>
                <Form.Control as={'select'} required value={category_id} type="text" name="category_id" onChange={handleChange}>
                  <option value=""></option>
                  {categoryIds &&
                    categoryIds.map((categoryId) => (
                      <option key={categoryId} value={categoryId}>
                        {categoryId}
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


export default ProductCategory;
