import { useState, useEffect } from "react";
import axios from "axios";

function Project() {
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
  const [cartItems] = useState([]);

  useEffect(() => {
    LoadCategories();
    LoadProduct("https://fakestoreapi.com/products");
  }, []);

  function LoadCategories() {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        response.data.unshift("all");
        setCategories(response.data);
      });
  }

  function LoadProduct(url) {
    axios.get(url).then((response) => {
      setProducts(response.data);
    });
  }

  function handleCategoryChange(e) {
    if (e.target.value == "all") {
      LoadProduct("https://fakestoreapi.com/products/");
    } else {
      LoadProduct(
        `https://fakestoreapi.com/products/category/${e.target.value}`
      );
    }
  }

  function handleAddClick(e) {
    axios
      .get(`https://fakestoreapi.com/products/${e.target.name}`)
      .then((response) => {
        cartItems.push(response.data);
        alert(`${response.data.title}\nAdded To Cart`);
      });
  }

  return (
    <div className="container-fluid">
      <header className="d-flex bg-warning text-dark justify-content-between p-3">
        <div className="h3">Amazon Shopping</div>
        <div className="fs-4">
          <span className="me-4">
            <a>Home</a>
          </span>
          <span className="me-4">
            <a>Jewelery</a>
          </span>
          <span className="me-4">
            <a>Electronics</a>
          </span>
        </div>
        <div className="fs-4">
          <button className="bi btn btn-light bi-cart4 position-relative">
            <span className="badge position-absolute rounded rounded-circle bg-danger text-white">
              0
            </span>
          </button>
        </div>
      </header>

      <section className="mt-3 row">
        <nav className="col-2">
          <div className="mt-4">
            <label className="fw-bold form-label">Select Category</label>
            <div>
              <select onChange={handleCategoryChange} className="form-select">
                {categories.map((category) => (
                  <option value={category} key={category}>
                    {" "}
                    {category.toUpperCase()}{" "}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </nav>
        <main
          className="col-10 overflow-auto"
          style={{ height: "500px", display: "flex", flexWrap: "wrap" }}
        >
          {products.map((product) => (
            <div
              className="card p-2 m-2"
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
                  name={product.id}
                  onClick={handleAddClick}
                  className="btn btn-dark w-100 bi bi-cart3"
                >
                  {" "}
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </main>
      </section>
    </div>
  );
}

export default Project;
