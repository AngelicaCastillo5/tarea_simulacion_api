const urlPrincipal = 'https://staging-allipen.kinsta.cloud';
const urlPedidos = '/wp-json/wc/v3/orders?';
const urlKeyPedidos = 'consumer_key=ck_fd9e9b6268a53648b5a461a708899886629b5cdc&consumer_secret=cs_e38f4e47284a0d234af9284deb0d9978350a0b75';
const pedidosPerPage = '&per_page=10';
const paginaActual = '&page=';
const apiURLPedidos = urlPrincipal + urlPedidos + urlKeyPedidos + pedidosPerPage + paginaActual;
var tablaHTML = ""; //variable que almaccena el escrito de la tabal en el html
var ActualPagina = 1; //pagina que itera 
var arregloContenedor = []; //arreglo para almacenar pedidos 
html_P = ""; //intento de paginacion 
const paginas = 2; //total de paginas 


function getISS(paso) {
    const responce = fetch(apiURLPedidos + paso);
    return responce.then(
        arreglo => {
            return arreglo.json();
        }
    ).then(data => {
        return data;
    })
};


var aux;
async function prueba(pageActual) {
    for (let pageActual = 1; pageActual <= paginas; pageActual++) {
        let data2 = await getISS(pageActual);
        console.log(data2);
        arregloContenedor.push(data2);
    }
    let largo_vector = arregloContenedor.length;
    showPages()


};

function showPages(id) {
    console.log("la id es : " + id);
}
prueba(paginaActual);

function paginacion(largo_vector, htmlPagination) {
    console.log(largo_vector);
    for (let i = 1; i <= largo_vector; i++) {
        htmlPagination += `<li><a href=#>` + i + `</a></li>`

    }
    document.getElementById("pagination").innerHTML = htmlPagination;
    var pager = $('.pager');
    console.log("paginacion: " + pager.length);
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



function test(pageNumber) {

    var page = "#pagination" + pageNumber;
    $('.select').hide()
    $(page).show()
}