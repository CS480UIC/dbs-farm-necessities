/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import styled from 'styled-components';
import { createProduct, deleteProduct, retrieveProducts, retrieveUsers, updateProduct } from '../../api/api-helpers';
import ButtonGroup from '../reusable-components/button-group';

const Product = () => {
  const initialState = {
    product_id: '',
    user_id: '',
    name: '',
    description: '',
    price: '',
  };
  const [products, setProducts] = useState([]);
  const [userIds, setUserIds] = useState([]);
  const [productIds, setProductIds] = useState([]);
  const [activeForm, setActiveForm] = useState('new');
  const [currentProduct, setCurrentProduct] = useState(initialState);
  const { product_id, user_id, name, description, price } = currentProduct;

  useEffect(async () => {
    const users = await retrieveUsers();
    users && Array.isArray(users) && setUserIds(users.map((user) => user.user_id));

    const allProducts = await retrieveProducts();
    allProducts && Array.isArray(allProducts) && setProductIds(allProducts.map((product) => product.product_id));
    allProducts && Array.isArray(allProducts) && setProducts(allProducts);
  }, []);

  const onRowClick = (e, product) => {
    setActiveForm('edit');
    setCurrentProduct(product);
  };

  const handleChange = async (e) => {
    return setCurrentProduct({ ...currentProduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.nativeEvent.submitter.title === 'update') {
      const updatedProduct = await updateProduct(currentProduct);
      updatedProduct.affectedRows === 1 &&
        setProducts(products.map((product) => (product.product_id === product_id ? currentProduct : product)));
    } else if (e.nativeEvent.submitter.title === 'delete') {
      const deletedProduct = await deleteProduct(currentProduct);
      deletedProduct.affectedRows === 1 && setProducts(products.filter((product) => product.product_id !== product_id));
    } else if (e.nativeEvent.submitter.title === 'create') {
      const newProduct = await createProduct(currentProduct);
      newProduct.insertId && setProducts([...products, { ...currentProduct, product_id: newProduct.insertId }]);
    }
    setCurrentProduct(initialState);
    setActiveForm('new');
  };

  console.log('products', products);

  return (
    <Styles>
      <Container className="p-5 cursor-pointer" fluid>
        <Row>
          <Col xs={12} lg={8}>
            <h3>Product</h3>
            {products && products.length > 0 && (
              <BootstrapTable
                hover
                keyField="user_id"
                data={products}
                columns={Object.keys(products[0]).map((key) => ({ dataField: key, text: key }))}
                rowEvents={{ onClick: onRowClick }}
              />
            )}
          </Col>
          <Col xs={12} lg={4}>
            <h3>{activeForm === 'new' ? 'New' : 'Edit'}</h3>
            <Form onSubmit={handleSubmit}>
              {activeForm === 'edit' && (
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
                <Form.Label>Name</Form.Label>
                <Form.Control required value={name} type="text" name="name" onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control required value={description} type="text" name="description" onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control required value={price} type="text" name="price" onChange={handleChange} />
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

export default Product;
