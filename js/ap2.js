const urlPrincipal = 'https://staging-allipen.kinsta.cloud';
const urlPedidos = '/wp-json/wc/v3/orders?';
const urlKeyPedidos = 'consumer_key=ck_fd9e9b6268a53648b5a461a708899886629b5cdc&consumer_secret=cs_e38f4e47284a0d234af9284deb0d9978350a0b75';
const pedidosPerPage = '&per_page=10';
const paginaActual = '&page=';
const apiURLPedidos = urlPrincipal + urlPedidos + urlKeyPedidos + pedidosPerPage;
var tablaHTML = ""; //variable que almaccena el escrito de la tabal en el html
var ActualPagina = 1; //pagina que itera 
var arregloContenedor = []; //arreglo para almacenar pedidos 
html_P = ""; //intento de paginacion 
//const paginas = 184; //total de paginas 


async function getISS(urlTotal) {
    const responce = fetch(urlTotal);
    //console.log(responce);
    responce.then(
        arreglo => {
            return arreglo.json();
        }
    ).then(data => {
        //console.log(data);
        //tablaHTML = llenadoTabla(data, tablaHTML);
        llenadoTabla(data, tablaHTML);
        busqueda();
        // arregloContenedor.push(data);
    })
};





// function output(item, index, array) {
//     var urlTotal = apiURLPedidos + item;
//     responce = fetch(urlTotal);
//     responce.then((arreglo) => {
//         contenedor.push(arreglo);
//         return contenedor;
//     }).catch((err) => {
//         console.log(err);
//     });

// }
function showPages(id) {
    id = parseInt(id);
    if (id === 1) {
        url = apiURLPedidos;
        console.log("esta es la url con la que voy a buscar" + url);
        getISS(url);
    } else {
        url = apiURLPedidos + paginaActual + id;
        getISS(url);
    }

}
getISS(apiURLPedidos);

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
    //return tablaHTMLF;
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