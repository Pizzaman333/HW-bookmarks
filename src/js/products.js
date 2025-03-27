import productsTemplate from "../templates/products.hbs"
import productsData from "../data/products.json"

const products = productsData.products;
const layout = productsTemplate({products});
document.querySelector(".products").innerHTML = layout;