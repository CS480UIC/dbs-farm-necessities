CREATE VIEW view_1 as select * from rating where product_id in (1,2,3) order by rating desc;
CREATE VIEW view_2 as select * from rating where rating>(select avg(rating) from rating);
CREATE VIEW view_3 as SELECT * FROM cart where user_id in (3,2) order by quantity DESC;
CREATE VIEW view_4 as SELECT concat(name,' ',description) FROM product;
CREATE VIEW view_5 as SELECT user_id,count(*) as number_of_orders FROM order_history group by user_id;
CREATE VIEW view_6 as SELECT order_id,day(delivery_date) FROM order_history where month(delivery_date)>5;
CREATE VIEW view_7 as select user_id,card_number from payment_detail where payment_id in (1,3,5) order by card_number desc;
CREATE VIEW view_8 as SELECT b.name as product_name,c.name as category_name FROM product_category a 
inner join product b on a.product_id=b.product_id 
inner join category c on a.category_id=c.category_id;
CREATE VIEW view_9 as select * from user where user_id in (select user_id from product);
CREATE VIEW view_10 as SELECT distinct user_id FROM order_history where exists 
(select * from payment_detail where payment_detail.payment_id=order_history.payment_id);
