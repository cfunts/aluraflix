import "./Header.css"
import Boton from "../Boton/Boton";

function Header(){
    return (
        <header className="contenedorHeader">
            <img src="./img/logo.png" alt="Logo Aluraflix"/>
            <section className="botones">
                <Boton>HOME</Boton>
                <Boton>NUEVO VIDEO</Boton>
            </section>
        </header>
        
    )
}
export default Header;