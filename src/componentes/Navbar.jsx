import "./navbar.css"
import CartWidget from "./CartWidget"

function Navbar () {
return (
    <div className="container">
<div className="logo">
  <img src="../src/componentes/logoCarrito.png" alt="" width="130"/>
  </div>
<nav>
  <ul>
    <a href=""><li> Inicio</li></a> 
    <a href=""><li>Cursos virtuales</li></a> 
    <a href=""><li>Cursos presenciales</li></a>
    <a href=""><li> <CartWidget/> </li> </a>
  </ul>
  </nav>
</div>

)

}

export default Navbar