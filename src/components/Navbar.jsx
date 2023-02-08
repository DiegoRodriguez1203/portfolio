import { Button } from "./Button";
import '../style/navbar.css'
import { useState } from "react";
import { Outlet, Link } from 'react-router-dom'
import { useStartContext } from '../context/reactcontext';
import { useSetStartContext } from '../context/reactcontext';

export const Navbar = ({act}) =>{
    const startContext = useStartContext()
    const setStartContext = useSetStartContext()
    let [act1, setAct1] = useState(act)

    return(
        <nav>
            <Link to='/aboutme'>
            <div onClick={()=> {setAct1(0)}}>
                <Button name="About me" active = {act1==0? true:false} />
            </div>
            </Link>
            <Link to='/knowledge'>
            <div onClick={()=>{setAct1(1)} }>
            <Button name="Knowledge" active = {act1==1? true:false}/>
            </div>
            </Link>
            <Link to='/proyects'>
            <div onClick={()=>{setAct1(2)} }>
            <Button name="Proyects" active = {act1==2? true:false}/>
            </div>
            </Link>
            <Link to='/skills'>
            <div onClick={()=>{setAct1(3)} }>
            <Button name="Skills" active = {act1==3? true:false} />
            </div>
            </Link>
        </nav>
    )
}