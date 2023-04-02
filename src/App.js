import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { Routes, Route } from "react-router-dom";
import Products from "./component/Products";
import ProductDetail from "./component/ProductDetail";
import Cart from "./component/Cart";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/products" element={<Products/>} />
        <Route exact path="/products/:id" element={<ProductDetail/>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
