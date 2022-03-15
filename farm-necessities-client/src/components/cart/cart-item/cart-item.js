import { faMinusCircle, faPlusCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart, deleteFromCart, reduceFromCart } from '../../../actions/cart-actions';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <tr>
      <td>{item.index + 1}</td>
      <td>{item.name}</td>
      <td>
        <Button onClick={() => dispatch(reduceFromCart(item))} variant="link" className="text-primary pb-2" size="md">
          <FontAwesomeIcon icon={faMinusCircle} />
        </Button>
        {item.quantity}
        <Button onClick={() => dispatch(addToCart(item))} variant="link" className="text-primary pb-2" size="md">
          <FontAwesomeIcon icon={faPlusCircle} />
        </Button>
      </td>
      <td>
        <Button onClick={() => dispatch(deleteFromCart(item))} variant="link" className="text-danger pb-2" size="md">
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </td>
    </tr>
  );
};

export default CartItem;
