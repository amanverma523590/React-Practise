import { BrowserRouter,Link,Route, Routes } from "react-router-dom";
import {Login} from './Login'
import { Mobile } from "./Mobile";
import { Details } from "./Details";
import './routing.css'

export function ShopingIndex() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <header>
            <h1>Shopping.</h1>
            <nav>
                <Link to="/">Home</Link> <span></span>
                <Link to="kids">Kids</Link> <span></span>
                <Link to="login">Login</Link> <span></span>
                <Link to="mobiles/iphone">Iphone</Link> <span></span>
                <Link to="mobiles/realme">Realme</Link>  <span></span>
            </nav>
        </header>
        <hr />

        <Routes>
            <Route path="/" element={<><h2>Home</h2><p>year end 40% off</p></>}></Route>
            <Route path="kids" element={<><h2>Kids</h2><p>but kids cloth</p></>}></Route>
            <Route path="login" element={<Login/>}></Route>
            <Route path="mobiles/:category" element={<Mobile/>}></Route>
            <Route path="details/:id/:name/:price/:stock" element={<Details/>}></Route>
            <Route path="*" element={<><code>Not found : Ptah not found</code></>}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}
