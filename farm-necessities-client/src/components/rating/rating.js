import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import styled from 'styled-components';
import { createRating, deleteRating, retrieveRatings, retrieveUsers, updateRating,retrieveProducts } from '../../api/api-helpers';
import ButtonGroup from '../reusable-components/button-group';

const Rating = () => {
  const initialState = {
    rating_id: '',
    user_id:'',
    product_id: '',
    rating: '',
    review: '',
  };
  const [ratings, setRatings] = useState([]);
  const [userIds, setUserIds] = useState([]);
  const [productIds, setProductIds] = useState([]);
  // const[ratingIds,setRatingIds]=useState([]);
  const [activeForm, setActiveForm] = useState('new');
  const [currentRating, setCurrentRating] = useState(initialState);
  const { rating_id,user_id,product_id,rating,review } = currentRating;

  useEffect(async () => {
    const users = await retrieveUsers();
    users && Array.isArray(users) && setUserIds(users.map((user) => user.user_id));
    const products = await retrieveProducts();
    products && Array.isArray(products) && setProductIds(products.map((product) => product.product_id));
    const allRatings = await retrieveRatings();
    // allRatings && Array.isArray(allRatings) && setRatingIds(allRatings.map((rating) => rating.rating_id));
    allRatings && Array.isArray(allRatings) && setRatings(allRatings);
  }, []);

  const onRowClick = (e, rating) => {
    setActiveForm('edit');
    setCurrentRating(rating);
  };

  const handleChange = async (e) => {
    return setCurrentRating({ ...currentRating, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.nativeEvent.submitter.title === 'update') {
      const updatedRating = await updateRating(currentRating);
      updatedRating.affectedRows === 1 &&
      setRatings(ratings.map((rating) => (rating.rating_id === rating_id ? currentRating : rating)));
    } else if (e.nativeEvent.submitter.title === 'delete') {
      const deletedRating = await deleteRating(currentRating);
      deletedRating.affectedRows === 1 && setRatings(ratings.filter((rating) => rating.rating_id !== rating_id));
    } else if (e.nativeEvent.submitter.title === 'create') {
      const newRating = await createRating(currentRating);
      newRating.insertId && setRatings([...ratings, { ...currentRating, rating_id: newRating.insertId }]);
    }
    setCurrentRating(initialState);
    setActiveForm('new');
  };

  console.log('products', ratings);

  return (
    <Styles>
      <Container className="p-5 cursor-pointer" fluid>
        <Row>
          <Col xs={12} lg={8}>
            <h3>Ratings</h3>
            {ratings && ratings.length > 0 && (
              <BootstrapTable
                hover
                keyField="rating_id"
                data={ratings}
                columns={Object.keys(ratings[0]).map((key) => ({ dataField: key, text: key }))}
                rowEvents={{ onClick: onRowClick }}
              />
            )}
          </Col>
          <Col xs={12} lg={4}>
            <h3>{activeForm === 'new' ? 'New' : 'Edit'}</h3>
            <Form onSubmit={handleSubmit}>
              {activeForm === 'edit' && (
                <Form.Group className="mb-3">
                  <Form.Label>Rating Id</Form.Label>
                  <Form.Control readOnly required value={rating_id} type="text" name="rating_id"/>
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
                <Form.Label>Rating</Form.Label>
                <Form.Control required value={rating} type="number" name="rating" onChange={handleChange} onWheel={(e) => e.target.blur()}/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Review</Form.Label>
                <Form.Control required value={review} type="text" name="review" onChange={handleChange} />
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


export default Rating;
