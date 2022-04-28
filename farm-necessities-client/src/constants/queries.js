export const queries = [
  {
    name: 'view1',
    query: 'SELECT * FROM rating WHERE product_id IN (1,2,3) ORDER BY rating DESC',
    key: 'rating_id',
  },
  {
    name: 'view2',
    query: 'SELECT * FROM rating WHERE rating > (SELECT AVG(rating) FROM rating)',
    key: 'rating_id',
  },
  {
    name: 'view3',
    query: 'SELECT * FROM cart WHERE user_id IN (3,2) ORDER BY quantity DESC',
    key: 'cart_id',
  },
  {
    name: 'view4',
    query: "SELECT CONCAT(name,' ',description) FROM product",
    key: "concat(name,' ',description)",
  },
  {
    name: 'view5',
    query: 'SELECT user_id, COUNT(*) AS number_of_orders FROM order_history GROUP BY user_id',
    key: 'user_id',
  },
  {
    name: 'view6',
    query: 'SELECT order_id, DAY(delivery_date) FROM order_history WHERE MONTH(delivery_date) > 5',
    key: 'order_id',
  },
  {
    name: 'view7',
    query: 'SELECT user_id, card_number FROM payment_detail WHERE payment_id IN (1, 3, 5) ORDER BY card_number DESC',
    key: 'payment_id',
  },
  {
    name: 'view8',
    query:
      'SELECT b.name AS product_name, c.name AS category_name FROM product_category a INNER JOIN product b ON a.product_id = b.product_id INNER JOIN category c ON a.category_id = c.category_id',
    key: 'product_name',
  },
  {
    name: 'view9',
    query: 'SELECT * FROM user WHERE user_id IN (SELECT user_id FROM product)',
    key: 'user_id',
  },
  {
    name: 'view10',
    query:
      'SELECT DISTINCT user_id FROM order_history WHERE EXISTS (SELECT * FROM payment_detail WHERE payment_detail.payment_id = order_history.payment_id)',
    key: 'user_id',
  },
];
