import { Navbar } from "../components/Navbar";
import { Proyect } from "../components/Proyect";
import '../style/pages/pages.css'


export const Proyectspage = () => {
    return(
        <section className="page">
            <div className="nav-cont">
                <Navbar act={2}/>
            </div>
            <div>
                <Proyect/>
            </div>
        </section>
    )
}