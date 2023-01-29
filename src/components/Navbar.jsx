import { Button } from "./Button";
import '../style/navbar.css'
import { useState } from "react";
import { Outlet, Link } from 'react-router-dom'
import { useStartContext } from '../context/reactcontext';
import { useSetStartContext } from '../context/reactcontext';

export const Navbar = () =>{
    const startContext = useStartContext()
    const setStartContext = useSetStartContext()
    let [act1, setAct1] = useState(0)

    return(
        <nav>
            {console.log(startContext)}
            
            <Link to='/aboutme'>
            <div onClick={()=> {setAct1(0); setStartContext(true)}}>
                <Button name="About me" active = {act1==0? true:false} />
            </div>
            </Link>
            <Link to='/skills'>
            <div onClick={()=>{setAct1(1); setStartContext(false)} }>
            <Button name="Skills" active = {act1==1? true:false}/>
            </div>
            </Link>
            <Link to='/proyects'>
            <div onClick={()=>{setAct1(2); setStartContext(false)} }>
            <Button name="Proyects" active = {act1==2? true:false}/>
            </div>
            </Link>
            <Link to='/references'>
            <div onClick={()=>{setAct1(3); setStartContext(false)} }>
            <Button name="References" active = {act1==3? true:false} />
            </div>
            </Link>
        </nav>
    )
}