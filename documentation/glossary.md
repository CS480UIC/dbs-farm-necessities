# Entitities  
Entity-Synonym-Description  
user -buyer/seller-store user base and their details  
product-merchandise-store product details  
product_category_relation-link table-store details of product and their categories  
category-group-types of products  
order_history-transaction-storing details of user transactions  
order_detail-link table-store details of orders  
payment_detail-remuneration-storing details of payment method  
address-location-storing addresses of users  
# Relationships  
Relationship->Maxima->Minima  
user has address->one-many->one-one  
product has category->many-many->one-zero  
user makes order->one-many->one-zero  
order has products->many-many->zero-one  
order has payment->one-one->one-one  
user has payment details->one-many->one-zero  

