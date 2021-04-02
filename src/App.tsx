import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout';
import ProductProvider from './Contexts/ProductContext';

function App() {
  return (
    <ProductProvider>

        <BrowserRouter>
          <Layout />
        </BrowserRouter>

    </ProductProvider>
  );
}

export default App;
