import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { getData } from '../../mocks/fakeApi'
import "./styles.css"
import ItemCount from "../../Components/ItemCount/ItemCount";


const onAdd = (quantity) =>{
    console.log(`compraste ${quantity} unidades`);
}


const ItemListContainer = ({greeting}) =>{
    const [productList, setProductList]=useState([])
    const [loading, setLoading]=useState(true)
    
    
  
    //tratar la promesa con then catch finally
      // useEffect(()=>{
      //   getData
      //   .then((result)=> setProductList(result))
      //   .catch((error)=> console.log(error))
      //   .finally(()=>setLoading(false) )
      // },[])
  
  
    //tratar la promesa con try cathc finally 
      const getProducts = async () => {
        try{
          const respuesta = await getData
          setProductList(respuesta)
        }catch(error){
          console.log(error)
        }finally{
          setLoading(false)
        }
      }

      useEffect(()=>{
        getProducts()
      },[])
   
  
    
  

    return(
        <div className="landing">
         <span>={greeting}</span>
         <ItemCount initial={1} stock={5} onAdd={onAdd} /> 
         {loading ? <p>Cargando...</p> : <ItemList productList={productList}/> }
        
        </div>
 
    );
    
};




export default ItemListContainer;