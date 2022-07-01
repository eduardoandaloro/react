import React from "react";
import CartWidget from "../../Components/CartWidget/CartWidget";
import "./styles.css"

const Header = () => {
   return(
    <header class="encabezado" id="inicio">
    <div class="contenido-navegacion">
        <div class="logo">
            <h2>Eduardo <span>tecnology</span></h2>
        </div>
        <nav class="navegacion ocultar">
            <a href="#inicio">INICIO</a>
            <a href="#nosotros">NOSOTROS</a>
            <a href="#servicios">SERVICIO</a>
            <a href="#contacto">CONTACTO</a>
        </nav>
        <div class="hamburguesa">
            <span></span><span></span><span></span>
        </div>
        <CartWidget />
    </div>
   

    <div class="contenido-encabezado contenedor">
        <div class="texto-encabezado">
            <h1>Estamos a la Vanguardia de la Tecnología</h1>
        </div>

        
    </div>
</header>
   

   );

}
export default Header