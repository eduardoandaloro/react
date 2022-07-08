import React from "react";
import { Link } from 'react-router-dom';
import CartWidget from "../CartWidget/CartWidget";




const categories = [
    
    { 
        id: 1,
        path: '/',
        name: 'INICIO',
    }, 
    {
        id: 2,
        path: '/category/nosotros',
        name: 'NOSOTROS',
    },
    {
        id: 3,
        path: '/category/servicios',
        name: 'SERVICIOS',
    },
    {
        id: 4,
        path: '/category/contacto',
        name: 'CONTACTO',
    },
  
];


const Header = () => {
   return(
      <header className="encabezado" id="inicio">

        
        <div class="contenido-navegacion">
                <div className="logo">
                   <h2>Eduardo <span>tecnology</span></h2>
                </div>
         <nav>
            
             <ul >
                  {categories.map((category) => (
                      < Link to={category.path} key={category.id}>
                        {category.name}
                      </Link>
                 ))}
             </ul>
             <CartWidget />
         </nav>
           
        
        </div>
      </header>


    );

}
export default Header