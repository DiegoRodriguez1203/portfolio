import '../style/skillpage.css'
import {Slider} from '../components/Slider'
import { Education } from '../components/Education'
import {Adobe} from '../components/Adobe'

export const Skillpage = ()=>{
    return(
        <section className="skill">
            <Slider/>
            <Education/>
            <Adobe/>
        </section>
    )
}