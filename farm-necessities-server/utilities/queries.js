export const selectUser = {
  all: 'SELECT * FROM user;',
  byEmail: 'SELECT * FROM user WHERE email = ?;',
  getIDs: 'SELECT DISTINCT user_id FROM user',
};
export const insertUser =  'INSERT INTO user (name, password, email, phone_number, account_type) VALUES (?, ?, ?, ?, ?);';

export const selectAddress = {
  all: 'SELECT * FROM address;',
  byID: 'SELECT * FROM address WHERE address_id = ?;',
  getIDs: 'SELECT address_id FROM address',
};
export const insertAddress = 'INSERT INTO address (user_id,address) VALUES(?, ?);';
export const updateAddress = 'UPDATE address SET user_id= ?,address= ? WHERE address_id = ?;';
export const deleteAddress = 'DELETE FROM address WHERE address_id = ?';

export const selectProduct = 'SELECT * FROM product;';
export const insertProduct = 'INSERT INTO product (user_id, name, description, price) VALUES(?, ?, ?, ?);';
export const updateProduct = 'UPDATE product SET user_id= ?, name = ?, description = ?, price = ? WHERE product_id = ?;';
export const deleteProduct = 'DELETE FROM product WHERE product_id = ?';

export const selectCategory = { all: 'SELECT * FROM category;', };
export const insertCategory = 'INSERT INTO category (name,status) VALUES(?, ?);';
export const updateCategory = 'UPDATE category SET name= ?,status= ? WHERE category_id = ?;';
export const deleteCategory = 'DELETE FROM category WHERE category_id = ?';

export const queries = {
  view1: 'SELECT * FROM view_1;',
  view2: 'SELECT * FROM view_2;',
  view3: 'SELECT * FROM view_3;',
  view4: 'SELECT * FROM view_4;',
  view5: 'SELECT * FROM view_5;',
  view6: 'SELECT * FROM view_6;',
  view7: 'SELECT * FROM view_7;',
  view8: 'SELECT * FROM view_8;',
  view9: 'SELECT * FROM view_9;',
  view10: 'SELECT * FROM view_10;',
};

export const selectProductCategory = 'SELECT * FROM product_category;';
export const insertProductCategory = 'INSERT INTO product_category (product_id,category_id) VALUES(?, ?);';
export const updateProductCategory = 'UPDATE product_category SET product_id= ?, category_id = ? WHERE product_category_id = ?;';
export const deleteProductCategory = 'DELETE FROM product_category WHERE product_category_id = ?;';

export const selectOrderDetail = 'SELECT order_detail_id, order_id, product_id, quantity FROM order_detail;';
export const insertOrderDetail = 'INSERT INTO order_detail (order_id, product_id, quantity) VALUES(?, ?, ?);';
export const updateOrderDetail = 'UPDATE order_detail SET order_id= ?, product_id= ?, quantity = ? WHERE order_detail_id = ?;';
export const deleteOrderDetail = 'DELETE FROM order_detail WHERE order_detail_id = ?;';

export const selectCart = 'SELECT * FROM cart;';
export const insertCart = 'INSERT INTO cart (user_id,product_id,quantity) VALUES(?, ?, ?);';
export const updateCart = 'UPDATE cart SET user_id= ?,product_id= ?, quantity = ? WHERE cart_id = ?;';
export const deleteCart = 'DELETE FROM cart WHERE cart_id = ?;';

export const selectRating = 'SELECT * FROM rating;';
export const insertRating = 'INSERT INTO rating (user_id,product_id,rating,review) VALUES(?, ?, ?,?);';
export const updateRating = 'UPDATE rating SET user_id= ?,product_id= ?, rating = ?,review= ? WHERE rating_id = ?;';
export const deleteRating = 'DELETE FROM rating WHERE rating_id = ?;';

export const selectPaymentDetail = 'SELECT * FROM payment_detail;';
export const insertPaymentDetail = 'INSERT INTO payment_detail (user_id,card_number) VALUES(?, ?);';
export const updatePaymentDetail = 'UPDATE payment_detail SET user_id= ?, card_number= ? WHERE payment_id = ?;';
export const deletePaymentDetail = 'DELETE FROM payment_detail WHERE payment_id = ?;';

export const selectOrderHistory = 'SELECT * FROM order_history;';
export const insertOrderHistory = 'INSERT INTO order_history (user_id,payment_id,address_id,delivery_date) VALUES(?, ?, ?,?);';
export const updateOrderHistory = 'UPDATE order_history SET user_id= ?,payment_id= ?, address_id = ?,delivery_date= ? WHERE order_id = ?;';
export const deleteOrderHistory = 'DELETE FROM order_history WHERE order_id = ?;';
