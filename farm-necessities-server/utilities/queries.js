export const selectUser = {
  all: 'SELECT * FROM user;',
  byEmail: 'SELECT * FROM user WHERE email = ?;',
};

export const insertUser = 'INSERT INTO user (name, password, email, phone_number, account_type) VALUES (?, ?, ?, ?, ?);';
