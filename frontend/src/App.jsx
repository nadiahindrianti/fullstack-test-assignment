import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddTrip from "./pages/AddTrip";
import DetailTrip from "./pages/DetailTrip";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-trip" element={<AddTrip />} />
        <Route path="/trip/:id" element={<DetailTrip />} />
      </Routes>
    </>
  );
};

export default App;
