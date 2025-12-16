import axios from "axios";
import { useEffect, useState } from "react"

export function KeyDemo(){

    const [users, setUsers] = useState([{user_id:''}]);
    const [userMsg, setUserMsg] = useState('');
    const [validationClass, setValidationClass] = useState('');
    const [toggleMsg, setToggleMsg] = useState('d-none');

    useEffect(()=>{
        axios.get(`users.json`)
        .then(response=>{
             setUsers(response.data);
        })
    },[])

    function handleKeyUp(e){
        for(var user of users){
            if(user.user_id===e.target.value){
                setUserMsg('User Id Taken - Try another');
                setValidationClass('text-danger');
                break;
            } else {
                setUserMsg('User Id Available');
                setValidationClass('text-success');
            }
        }
    }
    function handleKeyPress(e){
        if(e.which>=65 && e.which<=90){
            setToggleMsg('d-block');
        } else {
            setToggleMsg('d-none');
        }
    }

    return(
        <div className="container-fluid">
            <h3>Register User</h3>
            <dl>
                <dt>User Id</dt>
                <dd><input type="text" onKeyUp={handleKeyUp} /></dd>
                <dd className={validationClass}>{userMsg}</dd>
                <dt>Password</dt>
                <dd><input type="password" onKeyPress={handleKeyPress} /></dd>
                <dd className={toggleMsg}>
                    <span className="bi text-warning bi-exclamation-triangle"> Warning : Caps ON </span>
                </dd>
            </dl>
        </div>
    )
}
