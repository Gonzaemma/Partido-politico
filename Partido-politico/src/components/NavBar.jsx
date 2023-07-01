import NavStyles from "../styles/NavBar.module.css"
import { NavLink, useLocation } from "react-router-dom";


function NavBar(){

    let location = useLocation();
    return <div className={NavStyles.container}>
        
        <img src="https://www.republicanosunidos.com.ar/img/logo/RepublicanosUnidos.png" alt="logo" />
        {(location.pathname !== "/") && <button><NavLink to={"/"}>Inicio</NavLink></button>}
        <button><NavLink to={"/about"}>¿Quénes somos?</NavLink></button>
        <button><NavLink to={"/proposal"}>Propuestas</NavLink></button>
        <button><NavLink to={"/affiliate"}>Afiliate</NavLink></button>
    </div>
}

export default NavBar;