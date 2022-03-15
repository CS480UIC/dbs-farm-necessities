import React, { useEffect } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchCategories } from '../../../actions/shop-actions';

const Categories = ({ defaultCategory, activeCategory, setActiveCategory }) => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <Styles>
      <Tabs activeKey={activeCategory} onSelect={(category_id) => setActiveCategory(parseInt(category_id))} className="mb-3">
        <Tab key={defaultCategory.category_id} eventKey={defaultCategory.category_id} title={defaultCategory.name}></Tab>
        {categories ? (
          categories.map((category) => <Tab key={category.category_id} eventKey={category.category_id} title={category.name}></Tab>)
        ) : (
          <></>
        )}
      </Tabs>
    </Styles>
  );
};

const Styles = styled.div`
  .nav-link {
    margin: 2px;
  }
`;

export default Categories;
