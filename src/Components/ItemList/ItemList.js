import React from 'react'
import Item from '../../Components/Item/Item'
import './styles.css'

const ItemList = ({productList}) => {
   
  return (
    <div>
        <h3>LISTA DE PRODUCTOS</h3>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap'}}>
        {productList.map((product)=><Item key={product.id} product={product}/>)}
        </div>
    </div>
  )
}

export default ItemList