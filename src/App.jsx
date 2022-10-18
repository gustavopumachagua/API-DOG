import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PlayDog from "./pages/PlayDog";
import SingleDog from "./pages/SingleDog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:name" element={<SingleDog />} />
          <Route path="/playdog" element={<PlayDog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
