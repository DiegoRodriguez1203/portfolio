import '../style/education.css'
import { Showproyects } from './Showproyects'

export const Education = ()=>{
    return(
        <section className="education-cont">
            <div className='education-rect'></div>
            <div className="education-first">
                <h1>Full Stack Developer</h1>
                <h2>From UX and UI prototipes to robust functional web apps</h2>
            
                <div className='education-bot'> <h3>Programate Academy</h3> <div className='education-date'> <p>-2023</p> <div className='education-graduate'><p>Graduate</p></div></div> </div>
            </div>
            <div className='education-rect'></div>
            <div className="education-first">
                <h1>Marketer and Publicist</h1>
                <h2>Focused on branding, costumer psicology and design.</h2>
            
                <div className='education-bot'> <h3>Fundacion universitaria los libertadores</h3> <div className='education-date'> <p>-2022</p> <div className='education-graduate'><p>Graduate</p></div></div> </div>
            </div>
        </section>
    )
}