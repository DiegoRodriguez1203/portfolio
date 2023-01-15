import '../style/aboutme.css'
import rocket from '../img/start/Vector.svg'

export const Aboutme = ()=>{
    return(
        <section className="aboutme-cont">
            <div className="cont-first">
                <p>I love to solve problems using technology, based on user needs and behavior.</p>
                <div className="cont-first-img">
                <img src={rocket} alt="" />
                </div>
            </div>
            <div className="cont-second">
                <p>So, i use my knowledge about front-end and back-end tech to bring always the best possible product.</p>
                {/*<span className='also'> <p>Also I'm in constant learning {':)'}</p></span>*/}
                <p>Please, take a look out my portfolio, and let's start a great proyect.</p>
            </div>
        </section>
    )
}