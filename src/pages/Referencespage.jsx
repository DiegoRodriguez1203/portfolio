
import { Navbar } from '../components/Navbar'
import '../style/pages/pages.css'



export const Referencespage = () => {
    return(
        <section className="page">
            <div className="nav-cont">
                <Navbar act={3}/>
            </div>
            <div className='whyme'>
                
                <h1>Why me?</h1>
                <div className='whyme-down'>
                    <div className='square'></div>
                    <p>My strategic, mathematical thinking and natural impulse for perfection, lead me to create high-quality projects meet the requirements of my customers and market trends.</p>
                </div>
            </div>
        </section>
    )
}