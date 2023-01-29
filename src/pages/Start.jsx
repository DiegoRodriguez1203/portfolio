import { Title } from '../components/Title'
import { Resume } from '../components/Resume'
import { Photo } from '../components/Photo'

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