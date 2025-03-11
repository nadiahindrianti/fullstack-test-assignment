import React from "react";
import CardTrip from "./CardTrip";
import "../pages/Home/Home.css";
import trips from "../data/Trips.js";

const ListTrip = () => {
  return (
    <div className="row g-4">
      {trips.map((trip) => (
        <div className="col-md-4" key={trip.id}>
          <CardTrip trip={trip} />
        </div>
      ))}
    </div>
  );
};

export default ListTrip;
