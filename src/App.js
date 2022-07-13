import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import React from "react";
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailsContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import Cart from './Components/Cart/Cart'
import Header from './Components/Header/Header';
import CartCustomProvider from './Context/CartContext'



import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


const App = () => {

  return (
      <BrowserRouter>
        <CartCustomProvider >
          <Header />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting='Bienvenido' />} />
            <Route path="/category/:categoryId" element={<ItemListContainer greeting='Bienvenido' />} />
            <Route path="/product/:productId" element={<ItemDetailsContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartCustomProvider>
      </BrowserRouter>
  )
}


export default App