import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./components/HomePage";
import Login from "./components/LoginPage";
import PLP from "./components/PLP";
import PDP from "./components/PDP";
import Register from "./components/Register";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product/:productId" element={<PDP />} />
          <Route path="/products" element={<PLP />}>
            <Route path=":category" element={<PLP />}>
              <Route path=":category2" element={<PLP />} >
                <Route path=":category3" element={<PLP />}/>
              </Route>
            </Route>
          </Route>
          <Route path="/manufacturer" element={<PLP />}>
            <Route path=":manufacturerName"element={<PLP />}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
