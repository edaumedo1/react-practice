import React from "react";
import {Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/HomePage/Home";
import About from "../pages/AboutPage/About";
import Navigation from "../components/Navigation.js";
import Detail from "../pages/DetailPage/Detail";

function App(){
  return (
  <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path="/" element={<Home />}> </Route>
        <Route path=":food" element={<Detail />} />
      <Route path="/about" element={<About />}> </Route>
      </Routes>
  </BrowserRouter>
  );
}

export default App;