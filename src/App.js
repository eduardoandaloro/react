import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import React from "react";
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailsContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import Cart from './Components/Cart/Cart'
import Header from './Components/Header/Header';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ClassNames } from '@emotion/react';


const App = () => {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting='listas de productos'/>} />
        <Route path="/category/:categoryId" element={<ItemListContainer greeting='listas de productos'/>}/>
        <Route path="/product/:productId" element={<ItemDetailsContainer />}/>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App