import NavStyles from "../styles/NavBar.module.css"


function NavBar(){
    return <div className={NavStyles.container}>
        <button>Inicio</button>
        <button>¿Quénes somos?</button>
        <button>Propuestas</button>
        <button>Afiliate</button>
    </div>
}

export default NavBar;