import { useEffect } from "react"


export function Life({count,data}){

    useEffect( ()=>{
        console.log('mounting .....')
    } ,[])

    return(
        <div>
            <h1>Counter Value</h1>
            <h1>Data Value</h1>
        </div>
    )
}