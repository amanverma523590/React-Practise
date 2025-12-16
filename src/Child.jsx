

export function Child(props){

    const {name, age,sex} = props.stu1;

    return(
        <div>
            Student Name : {name} <br />
            Student Age : {age} <br />
            Student Sex : {sex} <br />
        </div>
    )
}