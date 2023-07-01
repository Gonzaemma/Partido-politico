import NavBar from './NavBar'
import HomeStyles from '../styles/Home.module.css'
import Carrousel from './Carrusel';

function Home (){

    return (
        <div>
            <NavBar/>
            <h1 className={HomeStyles.centerTitle}>"Nombre del partido político"</h1>
            <Carrousel/>
        </div>
    )
}

export default Home;