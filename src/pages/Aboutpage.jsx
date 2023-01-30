import { Aboutme } from '../components/Aboutme'
import { Navbar } from '../components/Navbar'
import '../style/pages/aboutpage.css'
import { Start } from '../components/Start'


export const Aboutpage = () =>{
    return(
        <section className='aboutpage'>
        <div>
            <Start/>
        </div>
        <div>
            <Navbar act={0}/>
        </div>
        <div>
            <Aboutme/>
        </div>
        </section>
    )
}