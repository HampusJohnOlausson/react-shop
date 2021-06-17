import express, { Request, Response } from 'express';
const controller = require('./order.controller');

const orderRouter = express.Router();

orderRouter.post('/add-order', controller.addOrder)
orderRouter.get('/all-orders', controller.getOrders)
orderRouter.get('/specific-order/:id', controller.getSpecific)
orderRouter.get('/user-orders/:id', controller.getUserOrders)
orderRouter.patch('/sent-order/:id', controller.orderSent)
orderRouter.get('/order-test', async(req: Request, res: Response) => res.send('order-test'))

export default orderRouter;