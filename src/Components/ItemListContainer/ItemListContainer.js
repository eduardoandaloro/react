
import React from "react";
import "./styles.css"
import ItemCount from "../../Components/ItemCount/ItemCount";


const onAdd = (quantity) =>{
    console.log(`compraste ${quantity} unidades`);
}


const ItemListContainer = ({greeting}) =>{
    return(
        <div className="landing">
         <span>={greeting}</span>
         <ItemCount initial={1} stock={5} onAdd={onAdd} /> 
        </div>
       
    );
};




export default ItemListContainer;