import React from "react";
import { useNavigate } from "react-router-dom";
import "../pages/Home/Home.css";

const CardTrip = ({ trip }) => {
  const navigate = useNavigate();

  return (
    <div 
      className="card trip-card bg-white p-3 rounded shadow-sm" 
      style={{ width: "350px", height: "350px", cursor: "pointer" }}
      onClick={() => navigate(`/trip/${trip.id}`)} 
    >
      <img src={trip.image} className="card-img-top trip-img" alt={trip.title} />
      <div className="trip-slot">{trip.slot}</div>
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title mb-1">{trip.title}</h5>
        <div className="d-flex justify-content-between align-items-center">
          <p className="text-danger fw-bold mb-0">{trip.price}</p>
          <p className="text-muted text-end mb-0">{trip.location}</p>
        </div>
      </div>
    </div>
  );
};

export default CardTrip;
