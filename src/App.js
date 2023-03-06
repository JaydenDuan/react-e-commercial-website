import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar, Footer } from "./components";
import {
  Home,
  About,
  Products,
  SingleProduct,
  PrivateRoute,
  Cart,
  Checkout,
  Error,
} from "./pages";
function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route
          path="/products/:id"
          element={<SingleProduct></SingleProduct>}
        ></Route>
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <Checkout></Checkout>
            </PrivateRoute>
          }
        ></Route>
        <Route path="/error" element={<Error></Error>}></Route>
      </Routes>

      <Footer></Footer>
    </Router>
  );
}

export default App;
