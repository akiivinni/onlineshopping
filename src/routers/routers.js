import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "../pages/home";
import Shop from "../pages/shop";
import Cart from "../pages/carts";
import Checkout from "../pages/checkout";
import ProductDetails from "../pages/productdetails"; // Changed import to use correct case
import Login from "../pages/login";
import Signup from "../pages/signup";
import ProtectedRouting from "../customhooks/protectedrouting/protected";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route
             path="/checkout"
              element={
                  <ProtectedRouting>
                      <Checkout/>
                  </ProtectedRouting>
              }
            />
            <Route path="/shop/:id" element={<ProductDetails />} /> {/* Fixed route path for ProductDetails */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    );
};

export default Routers;
