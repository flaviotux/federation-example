const products = [
  {
    id: "1",
    name: "Produto maravilindo",
    price: 1.99,
  },
];

const Product = {
  getById(productID) {
    return products.find((id) => id === productID);
  },
  getList() {
    return products;
  },
};

export default Product;
