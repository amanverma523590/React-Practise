import { useState } from "react";


 function Event(){

    const[unmae, setUname] =useState('Simran')

    function ValueChange(e){
       setUname(e.target.value);
    }

    return(
        <div>
        <h2>Events in React</h2>
        UserName: <input type="text" onChange={ValueChange} value={unmae} />
        <h4>{unmae}</h4>
        </div>
    )
}
export default  Event;

