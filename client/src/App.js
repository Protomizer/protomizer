import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import { Navbar } from "./components";


function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<h2>about</h2>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
