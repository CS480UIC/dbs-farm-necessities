export const selectUser = {
  all: 'SELECT * FROM user;',
  byEmail: 'SELECT * FROM user WHERE email = ?;',
  getIDs: 'SELECT DISTINCT user_id FROM user',
};


export const insertUser =
  'INSERT INTO user (name, password, email, phone_number, account_type) VALUES (?, ?, ?, ?, ?);';
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

export const selectCategory = {
  all: "SELECT * FROM category;",
};
export const insertCategory =
  "INSERT INTO category (name,status) VALUES(?, ?);";
export const updateCategory =
  "UPDATE category SET name= ?,status= ? WHERE category_id = ?;";
export const deleteCategory = "DELETE FROM category WHERE category_id = ?";
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