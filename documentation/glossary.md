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

