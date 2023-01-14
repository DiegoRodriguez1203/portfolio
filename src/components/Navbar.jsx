import { Button } from "./Button";
import '../style/navbar.css'
import { useState } from "react";
/*onClick={()=> act==false?setAct(true):setAct(false)}*/

export const Navbar = () =>{
    let [act1, setAct1] = useState(0)

    return(
        <nav>
            <div onClick={()=> setAct1(0)}>
            <Button name="About me" active = {act1==0? true:false} />
            </div>
            <div onClick={()=> setAct1(1)}>
            <Button name="Skills" active = {act1==1? true:false}/>
            </div>
            <div onClick={()=> setAct1(2)}>
            <Button name="Proyects" active = {act1==2? true:false}/>
            </div>
            <div onClick={()=> setAct1(3)}>
            <Button name="References" active = {act1==3? true:false} />
            </div>
        </nav>
    )
}