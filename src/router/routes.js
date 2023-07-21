const express = require('express')
const router = express.Router();
const productController = require('../controllers/productController');

router.get("/products", productController.getAllProducts);
router.get("/product", productController.showProduct);
router.post("/product", productController.createProduct);
router.delete("/product", productController.deleteProduct);
router.put("/product", productController.updateProduct);

module.exports = router;