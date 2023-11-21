const Product = require("../models/product.model");

async function getAllProducts(req, res, next) {
  try {
    const products = await Product.findAll();
    // const weatherInfo = await fetch("weatherApi.com/meteo")
    res.render("customer/products/all-products", { products: products, /*weatherInfo: weatherInfo*/ } );
  } catch (error) {
    next(error);
  }
}

async function getProductDetails(req, res, next) {
  try {
    const product = await Product.findById(req.params.id);
    res.render("customer/products/product-details", { product: product });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllProducts: getAllProducts,
  getProductDetails: getProductDetails,
};
