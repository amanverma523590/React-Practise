import { useState, useEffect } from "react";
import axios from "axios";

export function Shopping() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([
    {
      id: 0,
      title: "",
      description: "",
      price: 0,
      image: "",
      category: "",
      rating: { rate: 0, count: 0 },
    },
  ]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    LoadCategories();
    LoadProduct("https://fakestoreapi.com/products");
  }, []);

  function LoadCategories() {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        response.data.unshift("ALL");
        setCategories(response.data);
      });
  }

  function LoadProduct(url) {
    axios.get(url).then((response) => {
      setProducts(response.data);
    });
  }

  function handleCategoryChange(e) {
    if (e.target.value === "ALL") {
      LoadProduct("https://fakestoreapi.com/products");
    } else {
      LoadProduct(
        `https://fakestoreapi.com/products/category/${e.target.value}`
      );
    }
  }

  function handleAddClick(product){
    alert( `${product.title} added to cart`);
    setCart([...cart, product])
    
  }

  return (
    <div className="container-fluid">
      <header className="d-flex bg-danger justify-content-between p-3 text-white ">
        <div className="h3">
          Amazon Shopping
        </div>
        <div>
          <span className="me-4">
            <a>Home</a>
          </span>
          <span className="me-4">
            <a>Electronics</a>
          </span>
          <span className="me-4">
            <a>Fashion</a>
          </span>
        </div>
        <div className="fs-4">
          <button className="bi btn btn-light bi-cart4 position-relative">
            <span className="badge position-absolute rounded rounded-circle bg-danger text-white">
              {cart.length}
            </span>
          </button>
        </div>
      </header>

      <section className="mt-4 row">
        <nav className="col-2">
          <div className="mt-4">
            <label className="from-label h4 fw-bold">Select Category</label>
            <div>
              <select className="form-select" onChange={handleCategoryChange}>
                {
                    categories.map( (category) =>( 
                        <option value={category} key={category}>
                            {" "}
                            {category.toUpperCase()}{" "}
                        </option>
                    ) )
                }
              </select>
            </div>
          </div>
        </nav>
        <main
          className="col-10 overflow-auto bg"
          style={{ height: "500px", display: "flex", flexWrap: "wrap" }}
        >
          {products.map((product) => (
            <div
              className="card p-2 m-2 "
              key={product.id}
              style={{ width: "200px" }}
            >
              <img src={product.image} className="card-img-top" height="120" />
              <div className="card-header" style={{ height: "120px" }}>
                <p>{product.title}</p>
              </div>
              <div className="card-body">
                <dl>
                  <dt>Price</dt>
                  <dd>{product.price}</dd>
                  <dt>Rating</dt>
                  <dd>
                    {product.rating.rate}{" "}
                    <span className="bi bi-star-fill text-success"></span>
                  </dd>
                </dl>
              </div>
              <div className="card-footer">
                <button 
                 className="btn btn-dark w-100  bi bi-cart3" 
                  onClick={()=>handleAddClick(product)}
                >
                  Add To Cart
                  </button>
              </div>
            </div>
          ))}
        </main>
      </section>
    </div>
  );
}
