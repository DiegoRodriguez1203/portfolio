import React, {useState, useContext} from "react" 

const StartContext = React.createContext(); 
const SetStartContext = React.createContext();
const proContext = React.createContext();
const SetProContext = React.createContext();



export const useStartContext =()=>{  
    return useContext(StartContext)
}
export const useSetStartContext =()=>{  
    return useContext(SetStartContext)
}
export const usePro =()=>{  
    return useContext(proContext)
}
export const useSetPro =()=>{  
    return useContext(SetProContext)
}




export const GeneralProvider= (props) =>{

    const [startAct, setStartAct] = useState(true)
    const [pro, setPro]= useState(0)

return(
<StartContext.Provider value = {startAct}>
    <SetStartContext.Provider value = {setStartAct}>
        <proContext.Provider value = {pro}>
        <SetProContext.Provider value = {setPro}>
    {props.children}
            </SetProContext.Provider>
        </proContext.Provider>
    </SetStartContext.Provider>
</StartContext.Provider>
);
}
