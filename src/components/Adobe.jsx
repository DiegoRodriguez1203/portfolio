import '../style/adobe.css'
import ps from '../img/adobe/ps.svg'
import ae from '../img/adobe/ae.svg'
import ai from '../img/adobe/ai.svg'
import pr from '../img/adobe/pr.svg'


export const Adobe = () =>{
    return(
        <div className=  'adobe' >
            <div className='adobe-text'> <p>Adobe software knowledge</p> <div className='adobe-rect'></div></div>
            <div className='adobe-logos'>
                <img src={ae} alt="" />
                <img src={ai}alt="" />
                <img src={ps} alt="" />
                <img src={pr}alt="" />
            </div>
        </div>

    )
}