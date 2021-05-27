import express, { Request , Response } from 'express';
import mongoose from 'mongoose';
const controller = require('./product.controller');
const productRouter = express.Router();

productRouter
    .get('/', controller.getProducts)
    // .get('/:id', controller.getSpecificProduct)
    .post('/', controller.addProduct)


export default productRouter;