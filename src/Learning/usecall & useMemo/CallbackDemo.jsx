import { useCallback, useEffect, useState } from "react"

export function Callback(){

    const[ref,setRef] = useState();
    const[timer,setTimer] = useState();

    function SetTime(){
        var now = new Date();
        setTimer(now.toLocaleTimeString())
    }

    useEffect(()=>{
        SetTime();
    },[])
    
    const fun = useCallback(()=>{
        function GetData(){
            setRef(30)
        }
        GetData();
    },[])

    function handleChange(){
        fun();
    }

    return(
        <div>
            <p>Component Render : {timer}</p>
            <button onClick={handleChange}>Get Data</button>
            {ref}
        </div>
    )
}