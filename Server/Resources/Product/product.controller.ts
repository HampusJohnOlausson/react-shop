import { Request, Response, NextFunction } from 'express';
const Product = require("./product.model");
const ErrorApi = require('../../Error/ErrorApi');

module.exports.getProducts = async function(req: Request, res: Response, next: NextFunction) {

    const products = await Product.find().sort();

    if(products) {
        res.status(200).json(products);
    }else {
        next(ErrorApi.notFound('Couldnt find the products'));
        return;
    }
};

module.exports.getSpecificProduct = async function(req: Request, res: Response, next: NextFunction) {
    
    const id = req.params.id;
    const specificProduct = await Product.findById(id);

    if(specificProduct){
        res.status(200).json(specificProduct);
    }else {
        next(ErrorApi.notFound('Couldnt find the product'));
        return;
    }
}

module.exports.addProduct = async function(req: Request, res: Response, next: NextFunction){

    if(req.body){
        if(!req.body.title){
            next(ErrorApi.badRequest('Cant add product'));
            return;
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
            quantity: req.body.quantity,
            title: req.body.title
        })

        await product.save(function(error: any){
            console.log(error);
        })
        res.status(201).json(product);
    }
};


module.exports.deleteProduct = async function (req: Request, res: Response, next: NextFunction){

    const id = req.params.id;
    const deletedProduct = await Product.findByIdAndDelete(id);

    if(deletedProduct){
        res.status(200).json(deletedProduct);
    }else{
        next(ErrorApi.notFound('This product does not exist.'))
        return;
    }
}

module.exports.editProduct = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const id = req.params.id;
  const updatedProduct = await Product.findByIdAndUpdate(id, {
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    size: req.body.size,
    category: req.body.category,
    quantity: req.body.quantity,
    stock: req.body.stock,
  });

  if(updatedProduct) {
    res.status(200).json(updatedProduct);
  } else {
    next(ErrorApi.notFound("Couldnt find the product"));
    return;
  }
};

module.exports.addSizeAndStock = async function (req: Request, res: Response, next: NextFunction){

    const id = req.params.id
    const currentProduct = await Product.findById(id);
    const foundVariant = currentProduct.variants.some((variant: any) => variant.size === req.body.size);

    if(foundVariant){
        await Product.findByIdAndUpdate(
            {"id": id, "variants.size": req.body.size},
            {
                "$set": {
                "variants.$.stock": req.body.stock
                }
              }
            );
            res.status(200).json('Stock is changed');
    } else {
        const product = await Product.update(
            { _id: id },
            {
                $push: {
                    variants: {
                        size: req.body.size,
                        stock: req.body.stock,
                        quantity: req.body.quantity,
                        title: req.body.title,
                    },
                },
            }
        );

        if(product){
            res.status(200).json(product);
        } else {
            next(ErrorApi.notFound('Couldnt find the product.'));
            return;
        }
    }   
};