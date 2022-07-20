import React, {useContext} from 'react'
import { cartContext } from '../../Context/CartContext'
import { link } from "react-router-dom"

const Cart = () => {
  
  const { products }  = useContext(cartContext);

  
  return (

    <>
      {
        products.length === 0
        ?
         <link to="/">no hay productos dirigete a este sitio </link>
        :
  
        <>
         {products.map(product => <h2 key={product.id}>{product.title}</h2>)}
        </>
      }
    </>
 
  )

  }




export default Cart