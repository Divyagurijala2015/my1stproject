import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './home';
import Cart from './cart';
import { CartProvider } from 'react-use-cart';


function App() {
  return (
    <div className="App">

    <CartProvider>
      <Home/>
      <Cart/>
    </CartProvider>
    </div>
  );
}

export default App;
