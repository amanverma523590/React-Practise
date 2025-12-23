import { useEffect, useState } from "react"

export function Twoway(){
    const[name,setName] = useState("aman");

    useEffect(()=>{
        setName("Ravi")
    },[])

    return(
        <div>
           Name : <input type="text" value={name}/>
           
        </div>
    )
}