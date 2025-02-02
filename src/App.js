import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Header from "./Header";
import Footer from "./Footer";
//import Product from "./Product";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Login" element={<Login />} />
        {/* <Route exact path="/Product" element={<Product />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
