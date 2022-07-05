import "./styles.css"

import React,{useState} from 'react';

export const ItemCount = ({initial, stock, onAdd}) =>{
    const [count, setCount] = useState(initial);

    const decrease = () =>{
     setCount(count-1);
        
    }
       
    const increase = () =>{
      setCount(count+1);
    }


 return(
        <div className="counter">
             <button  disabled={count <= 1}onClick={decrease} type="button" class="btn btn-danger">-</button>
             <span>{count}</span>
             <button disabled={count >= stock } onClick={increase} type="button" class="btn btn-success">+</button>
               
            <div>
                <button disabled={stock <= 0} onClick={() => onAdd(count)}>agregar al carrito</button>
            </div>
        </div>
    );
}
export default ItemCount;