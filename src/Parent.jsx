import { Child } from "./Child";


function Parent(){

    const user={
        name : 'Aman',
        age : 26,
        sex : 'Male'
    }

    return(
        <div>
            hi i am Parent
            <Child stu1={user}/>
        </div>
    )
}

export default Parent;