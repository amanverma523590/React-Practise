import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Details } from "./Details";
import { Home } from "./Home";
import { Invalid } from "./Invalid";
import { Login } from "./Login";
import { Product } from "./Product";
import { Success } from "./Success";

export function ShoperIndex() {
  return (
    <div>
      <BrowserRouter>
        <header>
          <h1 align="center">Shoper Index</h1>
        </header>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="products/:category" element={<Product/>}>
            <Route path="details/:id" element={<Details/>}></Route>
          </Route>
          <Route path="login" element={<Login/>}></Route>
          <Route path="invalid" element={<Invalid/>}></Route>
          <Route path="success/:uname" element={<Success/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
