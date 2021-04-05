import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout';
import CartProvider from './Contexts/CartContext';
import ProductProvider from './Contexts/ProductContext';

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
