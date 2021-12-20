  const api_url =
    'https://staging-allipen.kinsta.cloud/wp-json/wc/v3/products?consumer_key=ck_3aacf3a37869204b5d2dd8e52f1ad33654090049&consumer_secret=cs_58ba90340050b68481260e29349bfbb3bc73b956&_fields%5B%5D=name&_fields%5B%5D=sku&_fields%5B%5D=price&_fields%5B%5D=regular_price&_fields%5B%5D=stock_quantity&_fields%5B%5D=permalink&per_page=100';
  async function getISS() {
    const responce = fetch(api_url);
    responce.then(
      arreglo => {
        return arreglo.json();
      }
      ).then(data => {
      y(data);
      document.getElementById("escrito").innerHTML = HTM;
    })
  };
  getISS();
  var HTM;
  function y(data2) {
    console.log(data2);
    
    data2.forEach(element => {
      HTM += `
          <p>nombre: ` + element.name + `<br />
              precio:` + element.price + `<br />
              </p>
          `;
    });
    console.log(HTM);
    
  }

  