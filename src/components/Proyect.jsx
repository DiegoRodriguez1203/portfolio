import '../style/proyect.css'
import github from '../img/proyects/icons/github.svg'
import rocket from '../img/proyects/icons/rocket.svg'
import { usePro } from '../context/reactcontext'
import { useSetPro } from '../context/reactcontext'
import React, { Component } from 'react';

export const Proyect = ({title, desc, img }) => {
    const pro =usePro()
    const setPro = useSetPro()
    return(
        <div className="proyect">
            <button className='button-left' onClick={()=>{setPro(0)}}></button>
            <a href="">
                <div className='proyect-img'>
                <img src={img} alt="" />
                <div className='blackscreen'></div>
                </div>
            </a>
            <div className='proyect-text'>
            <h1 className={pro==1?'xd':'xdd'}>{title}</h1>
            <p>{desc}</p>
            <div className="proyect-logos">

                <a href=""><img src={github} alt="" /></a>
                <a href=""><img src={rocket} alt="" /></a>
            </div>
            </div>
            <button className='button-right' onClick={()=>{setPro(1)}}></button>
        </div>
    )
}