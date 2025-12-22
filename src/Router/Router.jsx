import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Login } from "./Login";


export function Routering() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <header className="p-2 text-center border border-1">
            <nav>
                <span className="mx-4"><Link to="/">Home</Link></span>
                <span className="mx-4"><Link to="mobiles">Mobiles</Link></span>
                <span className="mx-4"><Link to="women">Womens</Link></span>
                <span className="mx-4"><Link to="login">Login</Link></span>
            </nav>
        </header>

        <section className="mt-4 p-4">
            <Routes>
                <Route path="/" element={<div><h5>Shopping Home <p>Womens Shopiing | Kids shopping</p></h5></div>} ></Route>
                <Route path="mobiles" element={<div><h5>Mobiles</h5><p>Apple | samsung</p></div>}></Route>
                <Route path="women" element={<div><h5>Womens clothing</h5> <p>Saree | Frock</p></div>}></Route>
                <Route path="login" element={<Login/>}></Route>
            </Routes>
        </section>
      </BrowserRouter>
    </div>
  );
}
