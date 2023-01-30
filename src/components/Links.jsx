import React from 'react'
import '../style/photo.css'
import github from '../img/links/github.svg'
import behance from '../img/links/behance.svg'
import linkedin from '../img/links/linkedin.svg'

export const Links = () =>{
    return(
        
        <div className='cont-links' >
            <div className='links' >
                <a href="https://github.com/DiegoRodriguez1203"> <img src={github} alt="" /></a>
                <a href="https://www.behance.net/diegorodriguez98"><img src={behance} alt="" /></a>
                <a href="https://www.linkedin.com/in/diego-rodriguez1203/"><img src={linkedin} alt="" /></a>
            </div>
        </div>

    )
}
