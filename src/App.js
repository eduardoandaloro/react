
import React from 'react';
import Header from "./Components/Header"
import ItemListContainer from './Components/itemLstContainer';


const App = () =>{
  return(

    <div className='App'>
      <Header/>
      <ItemListContainer greeting= "bienvenido a mi página web"/>
     
    
    </div>
     
   
   
  );

}

export default App;
