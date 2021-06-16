const Orders = require('./order.model')
//const Users = require('../Users/users-model')
const Products = require('../Product/product.model')
const ErrorApi = require('../../Error/ErrorApi')
import { Request, Response, NextFunction } from 'express';


module.exports.addOrder = async (req: Request, res: Response, next: NextFunction) => {
    const { orderNumber, products, customer, orderAmount, shipment } = req.body; 
    const productVariant: any = []

    let isError = false; 

    await Promise.all(products.map(async (productID: any) => {
        const singleProduct = await Products.findOne({ _id: productID.id})
        if(!singleProduct) {
            isError = true;
        } else {

            singleProduct.variants.forEach(async (product: { _id: string, size: string, stock: number, quantity: number, title: string}) => {
                if(productID.size === product.size){
                    const variantArray = [{
                        size: productID.size,
                        stock: product.stock - productID.quantity,
                        quantity: productID.quantity
                    }]
                    const object = {
                        size: productID.size, 
                        stock: product.stock - productID.quantity,
                        quantity: productID.quantity, 
                        title: singleProduct.title
                    }
                    productVariant.push(object)
                    console.log(productVariant)
                    await Products.findOneAndUpdate(
                        {"_id": productID.id, "variants._id": product._id},
                        {
                            "$set": {
                                "variants.$": variantArray
                            }
                        }
                    )
                }
            })
        }
    }))


    const newOrder = new Orders({
        orderNumber: orderNumber,
        products: productVariant,
        customer: customer,
        orderAmount: orderAmount, 
        delivery: shipment, 
        isSent: false
    })
    if(!isError){
        newOrder.save()
        res.status(200).json('Order made')
    } else {
        next(ErrorApi.badRequest('Couldnt add the order'));
        return; 
    }
}