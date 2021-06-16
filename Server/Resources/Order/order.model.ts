import mongoose, { Schema } from 'mongoose';

interface Product {
    product: string, 
    price: number, 
    amount: number, 
    size: number,
}

interface Order extends Document {
    orderNumber: string, 
    products: Product[],
    customer: string, 
    isSent: Boolean,
}

const shipment = new mongoose.Schema({
    days: String, 
    price: Number, 
    name: String
})

const orderSchema = new mongoose.Schema({
    orderNumber: {
        type: String,
        required: true
    },
    product: {
        type: Array, 
        required: true
    },
    customer: {
        type: String, 
        required: true
    },
    isSent: {
        type: Boolean, 
        required: true
    },
    orderAmount: {
        type: Number, 
        required: true
    },
    delivery: shipment

}, { timestamps: true })

module.exports = mongoose.model<Order>('Orders', orderSchema);