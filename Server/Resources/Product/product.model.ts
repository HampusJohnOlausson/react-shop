import mongoose from 'mongoose';

interface Product {
  title: string;
  description: string;
  price: number;
  size: string;
  category: string;
  quantity: number;
  stock: number,
}

const ProductVariant = new mongoose.Schema({
    size: String, 
    stock: Number, 
    quantity: Number,
    title: String,
})
const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    validate: {
      validator: function (value: any) {
        const titleRegex = /^[a-öA-Ö\s,'-]+$/;
        return titleRegex.test(value);
      },
      message: "Title must be a string",
    },
  },
  description: {
    type: String,
    required: true,
    validate: {
      validator: function (value: any) {
        const titleRegex = /^[a-öA-Ö\s,'-]+$/;
        return titleRegex.test(value);
      },
      message: "Title must be a string",
    },
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price must be a positive number"],
  },
  category: {
    type: [
      String,
    ],
    required: true,
  },
  variants: [ProductVariant],
});

module.exports = mongoose.model<Product>('Products', productSchema);