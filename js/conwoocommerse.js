const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const api = new WooCommerceRestApi({
    url: "https://staging-allipen.kinsta.cloud",
    //  consumerKey: "ck_3aacf3a37869204b5d2dd8e52f1ad33654090049",
    //  consumerSecret: "cs_58ba90340050b68481260e29349bfbb3bc73b956",
    consumerKey: "ck_fd9e9b6268a53648b5a461a708899886629b5cdc",
    consumerSecret: "cs_e38f4e47284a0d234af9284deb0d9978350a0b75",
    version: "wc/v3"
});


api.get("orders")
    .then((response) => {
        paginas = response.headers['x-wp-totalpages']
        elementos = response.headers['x-wp-total'];
        console.log(paginas);
        //   for (let pageActual = 1; pageActual <= paginas; pageActual++) {
        //       console.log(pageActual);

        //   }


    })
    .catch((error) => {
        console.log(error.response.data);
    });