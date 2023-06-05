const express = require('express');

const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails } = require('../controllers/productController');

const { isAuthethicatedUser, authorizeRoles } = require('../middleware/auth');

const router = express.Router();

router.route("/products")
    .get(getAllProducts);

router.route("/product/new")
    .post(isAuthethicatedUser, authorizeRoles("admin"), createProduct);

router.route("/product/:id")
    .put(isAuthethicatedUser, authorizeRoles("admin"), updateProduct)
    .delete(isAuthethicatedUser, authorizeRoles("admin"), deleteProduct)
    .get(getProductDetails);

module.exports = router;