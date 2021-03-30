export interface Product {
  id: number,  
  image: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
}

export const ProductData: Product[] = [
  {
    id: 1,
    image: "hhh",
    title: "Pizza Margarita",
    price: 139,
    description: "gjord på bla bla",
    quantity: 1,
  },

];