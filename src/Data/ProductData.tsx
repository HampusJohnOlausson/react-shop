export interface Product {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
  size: Array<{}>;
  category: string;
  gender: string;
  quantity: number;
}

export const ProductData: Product[] = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1571945153237-4929e783af4a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    title: "White T-shirt",
    price: 129,
    description: "Tomatsås, mozzarella och basilika",
    size: ["XS", "S", "M", "L", "XL"],
    category: "tshirt",
    gender: "men",
    quantity: 1,
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    title: "Black T-shirt",
    price: 149,
    description: "gjord på bla bla",
    size: ["XS", "S", "M", "L", "XL"],
    category: "tshirt",
    gender: "men",
    quantity: 1,
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1519330377309-9ee1c6783348?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80",
    title: "Black T-shirt",
    price: 149,
    description: "Tomatsås, mozzarella och basilika",
    size: ["XS", "S", "M", "L", "XL"],
    category: "tshirt",
    gender: "women",
    quantity: 1,
  },
  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1616006897093-5e4635c0de35?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    title: "White T-shirt",
    price: 129,
    description: "gjord på bla bla",
    size: ["XS", "S", "M", "L", "XL"],
    category: "tshirt",
    gender: "women",
    quantity: 1,
  },
  {
    id: "5",
    image:
      "https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    title: "Pizza Margarita",
    price: 139,
    description: "gjord på bla bla",
    size: ["XS", "S", "M", "L", "XL"],
    category: "hoodie",
    gender: "men",
    quantity: 1,
  },
  {
    id: "6",
    image:
      "https://images.unsplash.com/photo-1563074409-c1bd47bc2fc3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    title: "Pizza Margarita",
    price: 139,
    description: "gjord på bla bla",
    size: ["XS", "S", "M", "L", "XL"],
    category: "hoodie",
    gender: "men",
    quantity: 1,
  },
  {
    id: " 7",
    image:
      "https://images.unsplash.com/photo-1618736001182-16bf03602f25?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=927&q=80",
    title: "Pizza Margarita",
    price: 139,
    description: "gjord på bla bla",
    size: ["XS", "S", "M", "L", "XL"],
    category: "hoodie",
    gender: "women",
    quantity: 1,
  },
  {
    id: "8",
    image:
      "https://images.unsplash.com/photo-1615278167749-4b97fee4540e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=980&q=80",
    title: "Pizza Margarita",
    price: 139,
    description: "gjord på bla bla",
    size: ["XS", "S", "M", "L", "XL"],
    category: "hoodie",
    gender: "women",
    quantity: 1,
  },
  {
    id: "9",
    image:
      "https://images.unsplash.com/photo-1591213954196-2d0ccb3f8d4c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    title: "Pizza Margarita",
    price: 139,
    description: "Tomatsås, mozzarella och basilika",
    size: ["XS", "S", "M", "L", "XL"],
    category: "jacket",
    gender: "men",
    quantity: 1,
  },
  {
    id: "10",
    image:
      "https://images.unsplash.com/photo-1614693348454-1e0710d21c60?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80",
    title: "Pizza Margarita",
    price: 139,
    description: "gjord på bla bla",
    size: ["XS", "S", "M", "L", "XL"],
    category: "jacket",
    gender: "men",
    quantity: 1,
  },
  {
    id: "11",
    image:
      "https://images.unsplash.com/photo-1584530492829-9698dad2f5b1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    title: "Pizza Margarita",
    price: 139,
    description: "gjord på bla bla",
    size: ["XS", "S", "M", "L", "XL"],
    category: "jacket",
    gender: "women",
    quantity: 1,
  },
  {
    id: "12",
    image:
      "https://images.unsplash.com/photo-1603205954864-97a96582eb7f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    title: "Pizza Margarita",
    price: 139,
    description: "gjord på bla bla",
    size: ["XS", "S", "M", "L", "XL"],
    category: "jacket",
    gender: "women",
    quantity: 1,
  },
];