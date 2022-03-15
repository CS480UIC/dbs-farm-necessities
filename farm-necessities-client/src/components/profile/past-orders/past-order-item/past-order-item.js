import React from 'react';

const PastOrderItem = ({ item }) => {
  return (
    <tr>
      <td>{item.index + 1}</td>
      <td>{item.name}</td>
      <td>{item.quantity}</td>
    </tr>
  );
};

export default PastOrderItem;
