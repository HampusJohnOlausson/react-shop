import express from 'express';
const controller = require('./product.controller');
const productRouter = express.Router();

productRouter
    .get('/', controller.getProducts)
    .get('/:id', controller.getSpecificProduct)
    .post('/', controller.addProduct)
    .delete('/:id', controller.deleteProduct)
    .put('/:id', controller.editProduct)
    .post('/add-size-stock/:id', controller.addSizeAndStock)

export default productRouter;