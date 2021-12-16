import requests

if __name__=='__main__':
    url='https://staging-allipen.kinsta.cloud/wp-json/wc/v3/products?consumer_key=ck_3aacf3a37869204b5d2dd8e52f1ad33654090049&consumer_secret=cs_58ba90340050b68481260e29349bfbb3bc73b956&_fields%5B%5D=name&_fields%5B%5D=sku&_fields%5B%5D=price&_fields%5B%5D=regular_price&_fields%5B%5D=stock_quantity&_fields%5B%5D=permalink&per_page=100'
    response=requests.get(url)

    if response.status_code==200:
       json_data=response.json()
       ##print(json_data)
       json_data_cont=len(json_data)
       
       for i in range(json_data_cont-1):
           print(json_data[i]['name'])
    