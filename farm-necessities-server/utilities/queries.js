export const selectUser = {
  all: 'SELECT * FROM user;',
  byEmail: 'SELECT * FROM user WHERE email = ?;',
  getIDs: 'SELECT DISTINCT user_id FROM user',
};
export const insertUser =
  "INSERT INTO user (name, password, email, phone_number, account_type) VALUES (?, ?, ?, ?, ?);";

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

export const view1 = "SELECT * FROM view_1;";

export const selectCategory = {
  all: "SELECT * FROM category;",
};
export const insertCategory =
  "INSERT INTO category (name,status) VALUES(?, ?);";
export const updateCategory =
  "UPDATE category SET name= ?,status= ? WHERE category_id = ?;";
export const deleteCategory = "DELETE FROM category WHERE category_id = ?";
