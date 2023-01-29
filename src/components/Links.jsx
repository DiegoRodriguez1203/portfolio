import React from 'react'
import '../style/photo.css'
import github from '../img/links/github.svg'
import behance from '../img/links/behance.svg'
import linkedin from '../img/links/linkedin.svg'

export const Links = () =>{
    return(
        
        <div className='cont-links' >
            <div className='links' >
                <a href=""> <img src={github} alt="" /></a>
                <a href=""><img src={behance} alt="" /></a>
                <a href=""><img src={linkedin} alt="" /></a>
            </div>
        </div>

    )
}
