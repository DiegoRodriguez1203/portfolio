import '../style/photo.css'
import { Links } from './Links'


export const Photo = () =>{

    return(
    <section>
        <div className='circle-border'>
            <div className='circle-background'>
                <div className='big-circle'>
                    <div className="circle-one"></div>
                </div>
            </div>
        </div>
        <div className='down-circle'><Links/></div>
    </section>
    )
}