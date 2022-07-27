
import React, { useState, useContext} from 'react'
//import { cartContext } from '../../Context/CartContext'
import { db } from '../../Firebase/Firebase'
import { collection, addDoc, serverTimestamp, doc, updateDoc } from 'firebase/firestore'

const Cart = () => {

  //const {products} = useContext(cartContext)

  const [idVenta, setIdVenta] = useState("")

  const datosComprador = {
    nombre: 'damian',
    apellido: 'diaz',
    email: 'damiandiaz@gmail.com',
  }

  const finalizarCompra = () => {
    const ventasCollection = collection(db, 'ventas');
    addDoc(ventasCollection, {
      datosComprador,
      items: [{ nombre: "papa",id:1 }, { nombre: "batata",id:2 }],
      date: serverTimestamp(),
      total: 500
    })
    .then((result) =>{
      setIdVenta(result.id)
    })
    
    const updateCollection = doc(db, "Itemcoleccion","QgA8RUqvD4MvgeBUGk70");
    updateDoc(updateCollection,{stock:8})

  }

  return (
    <>
      <div>Cart</div>
      <button onClick={finalizarCompra}>Concretar Compra</button>
    </>
  )
}



export default Cart