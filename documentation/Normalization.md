### 1NF:
We checked that all our tables have a primary key,
There were multiple addresses for each user, each address was added as a new row. 
There were multiple products for each order, each product was added as a new row.
There were multiple categories for each product, each category was added as a new row.
We did the same for payments as a user could have multiple payment options.

### 2NF: 
We introduced primary keys in each table to uniquely identify each record.
Address table was created to normalize the user table in 2NF form.
Payment_details table was created to normalize the user table in 2NF form.
Order_detail table was created to normalize the order_history table in 2NF form.

### 3NF: 
Category table was created to move category name and status out of product category table which did not depend on product_id.

### BCNF:
Our Database was at this stage already in BCNF form.
