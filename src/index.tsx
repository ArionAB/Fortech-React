import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App";
import SignUpSignIn from "./pages/SignUpSignIn/SignUpSignIn";
import Catalog from "./pages/SignUpSignIn/Catalog/Catalog";

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignUpSignIn />}></Route>
      <Route path="/register" element={<SignUpSignIn />}></Route>
      <Route path="/catalog" element={<Catalog />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
