const Product = require('./product.model');
import { Request, Response } from 'express';

module.exports.getProducts = async function(req: Request, res: Response) {

    const products = await Product.find().sort();

    try{
        res.status(200).json(products);
    } catch(error){
        res.status(400).json(error);
    }
};

