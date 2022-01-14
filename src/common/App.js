import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/HomePage/Home";
import About from "../pages/AboutPage/About";
import Navigation from "../components/Navigation.js";
import Detail from "../pages/DetailPage/Detail";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      {/* 페이지로써 라우팅 */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/food/:foods" element={<Detail />} />
        <Route path="/about" element={<About />}></Route>
      </Routes>
      {/* <Routes>
        <Route path="/" element={<Home />}>
        // 컴포넌트로써 라우팅
          <Route path=":foods" element={<Detail />} />
        </Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;
