import '../style/pages/pages.css'
import { Slider } from '../components/Slider'
import { Education } from '../components/Education'
import { Adobe } from '../components/Adobe'
import { Navbar } from '../components/Navbar'

export const Skillpage = ()=>{
    return(
        <section className="page">
            <div className='nav-cont'>
                <Navbar act= {1}/>
            </div>
            <div className='page-center'>
            <div>
                <Slider/>
            </div>
            <div>
                <Education/>
            </div>
            <div>
                <Adobe/>
            </div>
            </div>
        </section>
    )
}