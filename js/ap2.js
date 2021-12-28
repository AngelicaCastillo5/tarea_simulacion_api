const urlPrincipal = 'https://staging-allipen.kinsta.cloud';
const urlPedidos = '/wp-json/wc/v3/orders?';
const urlProductos = '/wp-json/wc/v3/products?';

const urlKeyProductos = 'consumer_key=ck_3aacf3a37869204b5d2dd8e52f1ad33654090049&consumer_secret=cs_58ba90340050b68481260e29349bfbb3bc73b956';
const urlKeyPedidos = 'consumer_key=ck_fd9e9b6268a53648b5a461a708899886629b5cdc&consumer_secret=cs_e38f4e47284a0d234af9284deb0d9978350a0b75';
const urlKeyClientes = '';
const pedidosPerPage = '&per_page=10';
const paginaActual = '&page=';

const apiURLPedidos = urlPrincipal + urlPedidos + urlKeyPedidos + pedidosPerPage + paginaActual;
const apiURLProductos = urlPrincipal + urlKeyProductos + urlKeyProductos;
var cantidadPedidos = '';
//var tablaHTML = "<tr><th>Pedido</th><th>comprador</th><th>fecha</th><th>estado</th><th>total</th></tr>"
var tablaHTML = "";
var ActualPagina = 1;
var arregloContenedor = [];
async function getISS(paso) {
    const responce = fetch(apiURLPedidos + paso);
    console.log(responce);
    responce.then(
        arreglo => {
            return arreglo.json();
        }
    ).then(data => {
        // cantidadPedidos = `<h3> Cantidad de pedidos rescatados de la api ` + data.length + `</h3>`;
        //document.getElementById("NPedidos").innerHTML = cantidadPedidos;
        // tablaHTML = llenadoTabla(data, tablaHTML);
        // busqueda();
        arregloContenedor.push(data);
        return arregloContenedor;

        //console.log(arregloContenedor);

    }).then(array_c => {
        console.log(array_c);
        // paginacion(arregloContenedor.length, html_P);
    })
};



const paginas = 184;

for (let pageActual = 1; pageActual <= paginas; pageActual++) {
    //console.log(pageActual);
    getISS(pageActual);
}
html_P = "";

function paginacion(largo_vector, htmlPagination) {
    console.log(largo_vector);
    for (let i = 1; i <= largo_vector; i++) {
        htmlPagination += `<li><a href=#>` + i + `</a></li>`
        console.log(i);
    }
    document.getElementById("pagination").innerHTML = htmlPagination;

}

function llenadoTabla(data, tablaHTMLF) {
    //console.log(data);
    for (let i = 0; i < data.length; i++) {
        //  console.log(data[i].id);
        tablaHTMLF += `<tr>
         <td>${data[i].id}</td>
         <td>${data[i].billing.first_name}</td>
         <td>${data[i].date_created}</td>
         <td>${data[i].status}</td>
         <td>${data[i].total}</td>
         </tr>
         `;
    }
    document.getElementById("myTable").innerHTML = tablaHTMLF;
    return tablaHTMLF;
}

function busqueda() {
    $(document).ready(function() {
        $("#myInput").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $("#myTable tr").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
    });
}