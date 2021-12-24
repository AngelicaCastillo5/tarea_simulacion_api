const urlPrincipal = 'https://staging-allipen.kinsta.cloud';
const urlPedidos = '/wp-json/wc/v3/orders?';
const urlProductos = '/wp-json/wc/v3/products?';

const urlKeyProductos = 'consumer_key=ck_3aacf3a37869204b5d2dd8e52f1ad33654090049&consumer_secret=cs_58ba90340050b68481260e29349bfbb3bc73b956';
const urlKeyPedidos = 'consumer_key=ck_fd9e9b6268a53648b5a461a708899886629b5cdc&consumer_secret=cs_e38f4e47284a0d234af9284deb0d9978350a0b75';
const urlKeyClientes = '';

const apiURLPedidos = urlPrincipal + urlPedidos + urlKeyPedidos;
const apiURLProductos = urlPrincipal + urlProductos + urlKeyProductos;
var cantidadProductos = '';
async function getISS() {
    const responce = fetch(apiURLProductos);
    responce.then(
        arreglo => {
            return arreglo.json();
        }
    ).then(data => {
        cantidadProductos = `<h3> Cantidad de productos rescatados de la api ` + data.length + `</h3>`;
        iteracionHTML(data);
        document.getElementById("escrito").innerHTML = HTM;
        document.getElementById("Nproductos").innerHTML = cantidadProductos;
    })
};
getISS();
var HTM = "";

function iteracionHTML(data2) {
    console.log(data2);

    data2.forEach(element => {
        HTM += `
      <div class="col-lg-4 col-md-6 ">
      <div class="card" style="width: 16rem;">
          <img class="card-img-top" src="../public/images/general.png" alt="...">
          <div class="card-body">
              <div class="text-center">
                  <h5 class="fw-bolder">` + element.name + `</h5>
                          <!-- Product price--> $ ` +
            element.price + `
              </div>
          </div>
      </div>
  </div>
  `

        // <p>nombre: ` + element.name + `<br />
        //     precio:` + element.price + `<br />
        //     </p>
        ;
    });
    console.log(HTM);

}
const registrosPagina = 6;
paginaCorriendo = 1;

function numeroPaginas(totalRegistros, registrosPagina) {
    return Math.ceil(totalRegistros / registrosPagina);
}