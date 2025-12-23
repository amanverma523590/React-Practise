import { useState } from "react"
import { useParams } from "react-router-dom"

export function Mobile(){

    const[mobile,setMobile] = useState(
        [
            
           { name : "Realme c1",category : "realme"},
           { name :"Iphone 15 pro",category : "iphone"},
           { name : "Iphone 12", category : "iphone"}
        ]
    )

    let params = useParams();

    return(
        <div>
            <h1>Mobile - search result for {params.category.toLocaleUpperCase() }</h1>
            <table width="500" border="1">
                <thead>
                    <tr>
                    <th>name</th>
                    <th>category</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mobile.filter(mobile =>
                            mobile.category===params.category
                        ).map(item=>
                            <tr key={item.name}>
                                <td>{item.name}</td>
                                <td>{item.category }</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}