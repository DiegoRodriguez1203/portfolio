import '../style/reference.css'
import yury from '../img/references/yury.jpg'

export const Reference = () => {
    return(
        <div className="reference">
            <div className='top-reference'>
                <img src={yury} alt="" />
                <h2>YURY VELA</h2>
                <h3>CEO Corporacion Tejedores de Sociedad</h3>
            </div>
            <div className='bot-reference'>
            <p>"A great person to work with, responsible and always giving 110%"</p>
            </div>
        </div>
    )
}