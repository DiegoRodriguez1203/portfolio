import '../style/button.css'

export const Button = ({name ='About me', active=false}) =>{
    return(
        <div className=  'rec-button' >
            <button  className={active? 'active-button':'button'} ><span>{name}</span></button>
        </div>

    )
}
