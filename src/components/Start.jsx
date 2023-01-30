import { Title } from './Title'
import { Resume } from './Resume'
import { Photo } from './Photo'

import '../style/start.css'
export const Start = () =>{
    return(
        <section className='start'>
            <div>
            <Title/>
            <Resume/>
            </div>
        
        <Photo/>
        </section>
    )
}