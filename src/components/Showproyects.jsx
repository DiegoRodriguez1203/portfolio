import { useState, useEffect } from 'react'
import '../style/showproyects.css'
import '../style/slider.css'
import { Proyect } from './Proyect'
import {proyects} from  '../context/data'
import { usePro } from '../context/reactcontext'
import { useSetPro } from '../context/reactcontext'


const rsc = require.context('../img/proyects/photos/')



export const Showproyects = ()=>{
    const pro = usePro()
    const [fal, setFal] =useState(true)
    const SetPro = useSetPro()
    useEffect(() => {
      });

    return(
        
        <section>
            <Proyect title={proyects[pro].title} desc={proyects[pro].desc} img = {rsc( proyects[pro].img)}/>
        </section>
    )
}


       {/* <section>
            <div className='proyect-title'>
                <div className="proyect-figure-top-second"></div>
                <div className='proyect-text'>
                    <h2>{name}</h2>
                </div>
                <div className="proyect-figure-top-first"></div>
            </div>
            <div className='proyect-show'></div>
    </section>*/}