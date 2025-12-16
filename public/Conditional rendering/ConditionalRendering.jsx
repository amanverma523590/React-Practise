import { useState } from "react"
import Cra from './Crausole'
import App from './EmiCalulator'


export function CraDemo(){

    const[component,setComponent] = useState();
    function LoadComponent(cname){
        if(cname === 'emi'){
            setComponent(<App/>)
        }else{
            setComponent(<Cra/>)
        }
    }

    return(
        <div className="container-fluid">
            <button onClick={()=>LoadComponent('emi')}>Emi Calculator</button>
            <button onClick={()=>LoadComponent('carsol')}>Crausole</button>
            <hr />
            <div className="mt-4">
                {component}
            </div>
        </div>
    )
}