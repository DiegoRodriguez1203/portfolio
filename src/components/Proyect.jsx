import '../style/proyect.css'
import github from '../img/proyects/icons/github.svg'
import rocket from '../img/proyects/icons/rocket.svg'
import sahury from '../img/proyects/photos/sahury.png'

export const Proyect = () => {
    return(
        <div className="proyect">
            <a href="">
                <div className='proyect-img'>
                <img src={sahury} alt="" />
                <div className='blackscreen'></div>
                </div>
            </a>
            <div className='proyect-text'>
            <h1>Sahury Spa</h1>
            <p>A cart market made for Sahury-spa, a small beauty company who wanted to have a reservation and catalogue web app.</p>
            <div className="proyect-logos">
                <img src={github} alt="" />
                <img src={rocket} alt="" />
            </div>
            </div>
        </div>
    )
}