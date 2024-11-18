import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import SuccessPage from "./components/SuccessPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
}

export default App;
