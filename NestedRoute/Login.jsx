import { useState } from "react"
import { useNavigate } from "react-router-dom";


export function Login(){

    const[uname,setUname] = useState();

    let navigate = useNavigate();

    function handleUserName(e){
        setUname(e.target.value)
    }

    function handleLogic(){
        if(uname == "john_nit"){
            navigate(`/success/${uname}`);
        }
        else{
            navigate("/invalid");
        }
    }

    return(
        <div>
           Name : <input type="text" onChange={handleUserName} />
           <button onClick={handleLogic}>Login</button> 
        </div>
    )
}