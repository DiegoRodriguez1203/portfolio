import '../style/photo.css'
import { Links } from './Links'
import diego from '../img/start/diego.png'


export const Photo = () =>{

    return(
    <section>
        <div className='circle-border'>
            <div className='circle-background'>
            <img src={diego} alt="" />
                <div className='big-circle'>
                    <div className="circle-one">
                    </div>
                </div>
            </div>
        </div>
        <div className='down-circle'><Links/></div>
    </section>
    )
}