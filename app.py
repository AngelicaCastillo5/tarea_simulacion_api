import requests
import json

response =requests.get("https://staging-allipen.kinsta.cloud/wp-json/wc/v3/products?consumer_key=ck_3aacf3a37869204b5d2dd8e52f1ad33654090049&consumer_secret=cs_58ba90340050b68481260e29349bfbb3bc73b956&_fields%5B%5D=name&_fields%5B%5D=sku&_fields%5B%5D=price&_fields%5B%5D=regular_price&_fields%5B%5D=stock_quantity&_fields%5B%5D=permalink&per_page=100")
json_data=response.json()
json_name=json_data[0]['name']
print(json_name)