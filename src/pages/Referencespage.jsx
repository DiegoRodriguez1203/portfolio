import {Reference} from '../components/Reference'
import { Navbar } from '../components/Navbar'
import '../style/pages/pages.css'


export const Referencespage = () => {
    return(
        <section className="page">
            <div className="nav-cont">
                <Navbar act={3}/>
            </div>

            <div>
                <Reference/>
            </div>
        </section>
    )
}