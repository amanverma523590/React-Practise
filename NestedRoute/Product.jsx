import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

export function Product() {
  const [products, setProducts] = useState([]);

  let params = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${params.category}`)
      .then((response) => {
        setProducts(response.data);
      });
  }, []);

  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "6fr 6fr" }}>
        <div>
          <h3> {params.category.toUpperCase()} -Product </h3>
          {
          products.map(product => 
            <Link key={product.id} to={`details/${product.id}`} style={{width:'50px'}}>
                <img
                    src={product.image} width="50" height="50" 
                    style={{margin:'20px', display:'block'}}
                />
            </Link>
          )
          }
        </div>
        <div> <Outlet></Outlet> </div>
      </div>
      <p>
        <Link to="/">Back to Categories</Link>
      </p>
    </div>
  );
}
