import React, {useState, useContext} from "react" 

const StartContext = React.createContext(); 
const SetStartContext = React.createContext();

export const useStartContext =()=>{  
    return useContext(StartContext)
}
export const useSetStartContext =()=>{  
    return useContext(SetStartContext)
}

export const GeneralProvider= (props) =>{

    const [startAct, setStartAct] = useState(true)

return(
<StartContext.Provider value = {startAct}>
    <SetStartContext.Provider value = {setStartAct}>
    {props.children}
    </SetStartContext.Provider>
</StartContext.Provider>
);
}
