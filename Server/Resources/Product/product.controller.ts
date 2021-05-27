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

// module.exports.getSpecificProduct = async function(req: Request, res: Response) {
    
// }

module.exports.addProduct = async function(req: Request, res: Response){

    if(req.body){
        if(!req.body.title){
            return res.status(400).json('Cant add product');
        }


        const product = new Product({
            title: req.body.title,
            description: req.body.description,
            price: req.body.price, 
            category: req.body.category,
        })

        product.variants.push({
            size: req.body.size,
            stock: req.body.stock, 
            quantity: req.body.quantity
        })

        await product.save(function(error: any){
            console.log(error);
        })
        res.status(201).json(product);
    }
};
