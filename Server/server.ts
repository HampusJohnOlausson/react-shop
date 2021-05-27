import express from 'express';
import mongoose from 'mongoose';
import productRouter from './Resources/Product/product.router';

const PORT = process.env.PORT || 6000; 
const app = express();

const url ="mongodb+srv://hampusOlausson:Kurt3234Olsson@cluster0.xzbwr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose
  .connect(url, options)
  .then((result: any) => app.listen(PORT))
  .catch((error: any) => {
    console.log(error);
  });

  app.use(express.json());

// app.use("/order/", OrderRouter);
// app.use("/users", usersRouter);
app.use("/products", productRouter);
// app.use("/Shiping", shiping);
// app.use("/image", ImageRouter);

app.get("/", (_: any, res: any) => {
    console.log("Server connected");
});