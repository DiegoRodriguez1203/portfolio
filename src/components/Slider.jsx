import '../style/slider.css'
import figma from '../img/slider/figma.svg'
import css from '../img/slider/css.svg'
import git from '../img/slider/git.svg'
import js from '../img/slider/js.svg'
import react from '../img/slider/react.svg'


export const Slider = () =>{
    return(
        <section className='slider'>
            <div className="slider-top">
                <div className="figure-top-first"></div>
                <div className="figure-top-second"></div>
            </div>
                <div className='rombo-first'>
                    <img src={react} alt="" />
                <div className='rombo-second'></div>
            </div>
            <div className="slider-bot">
                <div className="figure-bot-first">
                    <img src={figma} alt="" />
                    <img src={js}alt="" />
                </div>
                <div className="figure-bot-second">
                    <img src={css} alt="" />
                    <img src={git}alt="" />
                </div>
                
            </div>
        </section>
    )
}