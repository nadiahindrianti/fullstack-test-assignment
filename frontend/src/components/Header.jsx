import React from "react";
import { useNavigate } from "react-router-dom";
import "../pages/Home/Home.css";

const Header = () => {
  const navigate = useNavigate(); 

  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      <h1 className="h4 fw-bold">Income Trip</h1>
      <button
        className="btn btn-warning text-white fw-bold"
        onClick={() => navigate("/add-trip")} 
      >
        Add Trip
      </button>
    </div>
  );
};

export default Header;
