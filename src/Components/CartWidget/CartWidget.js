
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { cartContext } from '../../Context/CartContext';
import React, { useContext } from 'react'


const CartWidget = () => {

  const { qtyProducts } = useContext(cartContext);

  return (
    <>
      <ShoppingCartIcon color="success" fontSize="large" />
      <p>{qtyProducts}</p>
    </>
  )
}


export default CartWidget






