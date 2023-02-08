import { Navbar } from "../components/Navbar";
import { Showproyects } from "../components/Showproyects";
import '../style/pages/pages.css'


export const Proyectspage = () => {
    return(
        
        <section className="page">
            <div className="nav-cont">
                <Navbar act={2}/>
            </div>
            <div>
                <Showproyects/>

                
            </div>
            
        </section>
    )
}