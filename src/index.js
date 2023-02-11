// import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Show from "./pages/Show";
import "./style.scss";
import"./login_register.css"
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthProvider } from "./context/AuthProvider";
import User from "./pages/User";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path="/:id" element={<Show />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/users" element={<User />}></Route>
    </Routes>
  </BrowserRouter>
);
