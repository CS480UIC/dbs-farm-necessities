# Entitities  
|Entity|Synonym|Description|
|:-----|:------|:----------|
|user |buyer/seller|store user base and their details|
|product|merchandise|store product details|
|product_category_relation|link table|store details of product and their categories|
|category|group|types of products|
|order_history|transaction|storing details of user transactions|
|order_detail|link table|store details of orders|
|payment_detail|remuneration|storing details of payment method|
|address|location|storing addresses of users|


# Relationships  
|Relationship|Maxima|Minima|
|:-----------|:-----|:-----|
|user has address|one-many|one-one|
|product has category|many-many|one-zero|
|user makes order|one-many|one-zero|
|order has products|many-many|zero-one|
|order has payment|one-one|one-one|
|user has payment details|one-many|one-zero| 


# Attributes  
|Attribute|Maxima|Minima|
|:--------|:-----|:-----|
|user_id|unique|required|
|user_name|singular|required|
|password|unique|required|
|email|unique|required|
|phone_number|unique|required|
|account_type|singular|required|
|product_id|unique|required|
|product_name|singular|required|
|description|singular|required|
|price|singular|required|
|product_id|unique|required|
|category_id|unique|required|
|category_id|unique|required|
|category_name|unique|required|
|order_id|unique|required|
|user_id|unique|required|
|payment_id|unique|required|
|address_id|unique|required|
|delivery_date|singular|optional|
|order_id|unique|required|
|product_id|unique|required|
|payment_id|unique|required|
|card_number|unique|required|
|user_id|unique|required|
|address_id|unique|required|
|user_id|unique|required|
|address|singular|required|

# Dependent Entities  
|Entity|Relationship|
|:--------|:-----|
|product_category|product_catgeory-Has-product And categoty|
|payment_detail|payment_detail-BelogsTo-user|
|address|address-BelongsTo-user|
|order_history|order_history-Has-user and address and payment_detail|
|product|product-BelongsTo-user|
|rating|rating-Has-user and product|
|cart|cart-Has-user and product|

# Subtype and Supertype entities  
There are no subtype and supertype entities  

# Cascade and Restrict rule  
category->product_category=>Cascade
product->product_category=>Cascade
user->address=>Cascade
user->payment_detail=>Cascade
user->cart=>Cascade
product->cart=>Cascade
user->rating=>Restrict
product->rating->Cascade
user->product=>Cascade
user->order_history=>Restrict
address->order_history=>Restrict
payment_detail->order_history=>Restrict  

# Attribute
|Attribute|Type|Cardinality|
|:--------|:-----|:-----|
|user_id|unique|required|
|user_name|singular|required|
|password|unique|required|
|email|unique|required|
|phone_number|unique|required|
|account_type|singular|required|
|product_id|unique|required|
|product_name|singular|required|
|description|singular|required|
|price|singular|required|
|product_id|unique|required|
|category_id|unique|required|
|category_id|unique|required|
|category_name|unique|required|
|order_id|unique|required|
|user_id|unique|required|
|payment_id|unique|required|
|address_id|unique|required|
|delivery_date|singular|optional|
|order_id|unique|required|
|product_id|unique|required|
|payment_id|unique|required|
|card_number|unique|required|
|user_id|unique|required|
|address_id|unique|required|
|user_id|unique|required|
|address|singular|required|

