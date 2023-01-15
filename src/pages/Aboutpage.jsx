import { Title } from '../components/Title'
import { Resume } from '../components/Resume'
import {Navbar} from '../components/Navbar'
import { Photo } from '../components/Photo'
import { Aboutme } from '../components/Aboutme'

export const Aboutpage = () =>{
    return(
        <section className='aboutpage'>
        <Title/>
        <Resume/>
        <Navbar/>
        <Photo/>
        <Aboutme/>
        </section>
    )
}