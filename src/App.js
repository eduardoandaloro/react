import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import React from 'react';
import Header from "./Components/Header/Header"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";




const App = () =>{
  return(

    <div className='App'>
      <Header/>
      <ItemListContainer greeting="bienvenido a mi página web"/>
    
     
    
    </div>
     
   
   
  );

}

export default App;
