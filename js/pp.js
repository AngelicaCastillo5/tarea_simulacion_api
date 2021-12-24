let jsp_current_page = 1;
const jsp_records_per_page = 4;

let jsp_json_object = [
    { json_item: "Item 1"},
    { json_item: "Item 2"},
    { json_item: "Item 3"},
    { json_item: "Item 4"},
    { json_item: "Item 5"},
    { json_item: "Item 6"},
    { json_item: "Item 7"},
    { json_item: "Item 8"},
    { json_item: "Item 9"},
    { json_item: "Item 10"},
    { json_item: "Item 11"},
    { json_item: "Item 12"},
    { json_item: "Item 13"},
    { json_item: "Item 14"},
    { json_item: "Item 15"},
    { json_item: "Item 16"},
    { json_item: "Item 17"},
    { json_item: "Item 18"},
    { json_item: "Item 19"},
    { json_item: "Item 20"},
];

function jsp_num_pages() {
    return Math.ceil(jsp_json_object.length / jsp_records_per_page);
}

function jsp_prev_page() {
    if (jsp_current_page > 1) {
        jsp_current_page--;
        jsp_change_page(jsp_current_page);
    }
}

function jsp_next_page() {
    if (jsp_current_page < jsp_num_pages()) {
        jsp_current_page++;
        jsp_change_page(jsp_current_page);
    }
}

function jsp_change_page(page) {
    const btn_prev = document.getElementById('btn-prev');
    const btn_next = document.getElementById('btn-next');
    const listing_table = document.getElementById('listing-table');
    let page_span = document.getElementById('page');
 
    if (page < 1) {
        page = 1;
    }
    if (page > jsp_num_pages()) {
        page = jsp_num_pages();
    }

    listing_table.innerHTML = '';

    for (let i = (page - 1) * jsp_records_per_page; i < (page * jsp_records_per_page) && i < jsp_json_object.length; i++) {
        listing_table.innerHTML += `${jsp_json_object[i].json_item}<br>`;
    }
    page_span.innerHTML = `${page}/${jsp_num_pages()}`;

    btn_prev.style.display = (page === 1) ? 'none' : 'inline-block';
    btn_next.style.display = (page === jsp_num_pages()) ? 'none' : 'inline-block';
}

window.onload = () => {
    document.getElementById('btn-prev').addEventListener('click', (e) => {
        e.preventDefault();
        jsp_prev_page();
    });

    document.getElementById('btn-next').addEventListener('click', (e) => {
        e.preventDefault();
        jsp_next_page();
    });

    jsp_change_page(1);
};

