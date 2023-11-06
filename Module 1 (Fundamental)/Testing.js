<script>    
    const products = [
        { id: 1, name: "Mangga", price: 10000, unit : "/KG" },
        { id: 2, name: "Daging sapi Australia", price: 300000, unit: "/GRAM" },
        { id: 3, name: "Ikan rebus Thailand", price: 175000, unit: "/PCS" },
        { id: 4, name: "Ular bakar Vietnam", price: 235000, unit: "/PCS" },
    ];

// Function to display products using alert
function showProductList() {
    let productListMessage = "Product List:\n";
    
    for (const product of products) {
        productListMessage += `${product.id}.  ${product.name} - ${product.price.toFixed(2)} - ${product.unit} \n`;
    }

    alert(productListMessage);
}

function productList() {
    let productListMessage = "Product List to delete:\n";
    
    for (const product of products) {
        productListMessage += `${product.id}. ${product.name} - ${product.price.toFixed(2)} - ${product.unit}\n`;
    }

    return productListMessage;
}

function generateMenu() {
    let menuMessage = "Menu: \n";
    let menus = [
        {
            id: 1,
            title: "List product"
        },
        {
            id: 2,
            title: "Delete product"
        }
    ];

    for (const menu of menus) {
        menuMessage += `${menu.id} - ${menu.title}\n`;
    }

    return menuMessage;
}

function deleteProduct(products, idx) {

    console.log(products, "TO DELETE >>");

    const index = products.indexOf(idx);
    if (index > -1) { // only splice array when item is found
        products.splice(index, 1); // 2nd parameter means remove one item only
    }

    return products;
}


function app() {
    let selectedMenu = Number(prompt(generateMenu()));
    console.log(selectedMenu, "SELECTED MENU >>>>>>")
    if(selectedMenu === 1) {
        showProductList();
        app();
    } 
    if(selectedMenu === 2) {
        let deletedProduct = Number(prompt(productList()));
        products.splice(deletedProduct - 1, 1); // 2nd parameter means remove one item only
        // selectedMenu = null;
        console.log(products, "DELETED PRODUCT")
        alert("Produk berhasil di hapus")
        showProductList();
        app();
    }
}

app();
</script>

// https://managementsystemv1.netlify.app/
// username: ryandefryan
// password: abc123