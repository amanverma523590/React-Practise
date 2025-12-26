import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


export function Details(){

    let params = useParams();

    const[product,setProduct] = useState(
        {
          id:0,
          title : '',
          price : 0,
          image : '',
          category : '',
          description : '',
          rating : {
            rate : 0,
            count : 0
          }
        }
     );

     useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
        .then(response=>{
            setProduct(response.data)
        })
     },[params.id])

    return(
        <div>
            <h3>Details</h3>
            <img src={product.image} width= "200" height="200" />
            <dl>
                <dt>Title</dt>
                <dd>{product.title}</dd>
                <dt>Price</dt>
                <dd>{product.price}</dd>
            </dl>
        </div>
    )
}