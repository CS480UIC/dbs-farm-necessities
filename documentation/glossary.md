# Entitities  
|Entity|Synonym|Description|
|:-----|:------|:----------|
|user |buyer/seller|store user base and their details|
|product|merchandise|store product details|
|product_category_relation|link table|store details of product and their categories|
|category|group|types of products|
|order_history|transaction|storing details of user transactions|
|order_detail|purchase|products in an order|
|payment_detail|remuneration|storing details of payment method|
|address|location|storing addresses of users|
|cart|link table|products in the cart|
|rating|rank|storing product reviews by users|  

# Relationships  
|Relationship|Maxima|Minima|
|:-----------|:-----|:-----|
|user has address|one-many|one-one|
|product has category|many-many|one-zero|
|user makes order|one-many|one-zero|
|order has products|many-many|zero-one|
|order has payment|one-one|one-one|
|user has payment details|one-many|one-zero| 
|product has reviews|one-many|one-zero|
|user makes reviews|one-many|one-zero|

# Attributes  
|Attribute|Maxima|Minima|
|:--------|:-----|:-----|
|user_id|unique|required|
|user_name|singular|required|
|password|singular|required|
|email|unique|required|
|phone_number|unique|required|
|account_type|singular|required|
|product_id|unique|required|
|product_name|singular|required|
|description|singular|required|
|price|singular|required|
|user_id|singular|required|
|product_id|singular|required|
|category_id|singular|required|
|category_id|unique|required|
|category_name|unique|required|
|order_id|unique|required|
|user_id|singular|required|
|payment_id|singular|required|
|address_id|singular|required|
|delivery_date|singular|optional|
|order_id|singular|required|
|product_id|singular|required|
|quantity|singular|required|
|payment_id|unique|required|
|card_number|unique|required|
|user_id|singular|required|
|address_id|unique|required|
|user_id|unique|required|
|address|singular|required|
|product_id|singular|required|
|user_id|singular|required|
|quantity|singular|required|
|user_id|singular|required|
|product_id|singular|required|
|rating|singular|required|
|review|singular|optional|

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
|order_detail|order_detail has product|

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
order_detail->order_history=>Cascade  


# Implementing Attributes
|Attribute|Type|Cardinality|
|:--------|:-----|:-----|
|user_id|INT|NOT NULL|
|user_name|VARCHAR|NOT NULL|
|password|VARCHAR|NOT NULL|
|email|VARCHAR|NOT NULL|
|phone_number|VARCHAR|NOT NULL|
|account_type|ENUM|NOT NULL|
|product_id|INT|NOT NULL|
|product_name|VARCHAR|NOT NULL|
|description|VARCHAR|NOT NULL|
|price|DECIMAL|NOT NULL|
|user_id|INT|NOT NULL|
|product_id|INT|NOT NULL|
|category_id|INT|NOT NULL|
|category_id|INT|NOT NULL|
|category_name|VARCHAR|NOT NULL|
|order_id|INT|NOT NULL|
|user_id|INT|NOT NULL|
|payment_id|INT|NOT NULL|
|address_id|INT|NOT NULL|
|delivery_date|DATE|NULL|
|order_id|INT|NOT NULL|
|product_id|INT|NOT NULL|
|quantity|INT|NOT NULL|
|payment_id|INT|NOT NULL|
|card_number|VARCHAR|NOT NULL|
|user_id|INT|NOT NULL|
|address_id|INT|NOT NULL|
|user_id|INT|NOT NULL|
|address|VARCHAR|NOT NULL|
|product_id|INT|NOT NULL|
|user_id|INT|NOT NULL|
|quantity|INT|NOT NULL|
|user_id|INT|NOT NULL|
|product_id|INT|NOT NULL|
|rating|INT|NOT NULL|
|review|VARCHAR|NULL|


# Plural Attribute
Address-> Was part of user entity, but users can have multiple addresses so, we created a seperate dependent entity to store addresses.  
