import '../style/showproyects.css'
import '../style/slider.css'

export const Showproyects = ({name = 'Development'})=>{
    return(
        <section>
            <div className='proyect-title'>
                <div className="proyect-figure-top-second"></div>
                <div className='proyect-text'>
                    <h2>{name}</h2>
                </div>
                <div className="proyect-figure-top-first"></div>
            </div>
            <div className='proyect-show'></div>
        </section>
    )
}