import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import trips from "../../data/Trips";
import Footer from "../../components/Footer";
import "./DetailTrip.css";

const DetailTrip = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const trip = trips.find((t) => t.id === parseInt(id));

  if (!trip) {
    return <h2 className="text-center mt-5">Trip not found</h2>;
  }

  return (
    <div className="min-vh-100 d-flex flex-column justify-content-between" style={{ background: "rgba(241, 241, 241, 1)" }}>
      <div className="container py-4">
        <div className="container detail-trip">
          <h2 className="trip-title">{trip.title}</h2>
          <p className="trip-location">{trip.location}</p>

          {/* Gambar utama */}
          <img src={trip.image} alt={trip.title} className="trip-image" />

          {/* Informasi tambahan */}
          <div className="trip-info-container">
            <div className="trip-info">
              <div className="info-item">
                <p className="info-title">Accommodation</p>
                <div className="info-content">
                  <img src="https://res.cloudinary.com/dwh00k4um/image/upload/v1741678040/sistem/et8lrcxnjgw9vsoi4lew.png" alt="Hotel" className="info-icon" />
                  <p className="info-text">{trip.infoText.accommodation}</p>
                </div>
              </div>

              <div className="info-item">
                <p className="info-title">Transportation</p>
                <div className="info-content">
                  <img src="https://res.cloudinary.com/dwh00k4um/image/upload/v1741678039/sistem/lfsrv6keaisigz5hunnt.png" alt="Flight" className="info-icon" />
                  <p className="info-text">{trip.infoText.transportation}</p>
                </div>
              </div>

              <div className="info-item">
                <p className="info-title">Eat</p>
                <div className="info-content">
                  <img src="https://res.cloudinary.com/dwh00k4um/image/upload/v1741678039/sistem/fv2vkp3p6bishu11okdo.png" alt="Meal" className="info-icon" />
                  <p className="info-text">{trip.infoText.eat}</p>
                </div>
              </div>

              <div className="info-item">
                <p className="info-title">Duration</p>
                <div className="info-content">
                  <img src="https://res.cloudinary.com/dwh00k4um/image/upload/v1741678039/sistem/nwylfyw3h68vhcwk43bn.png" alt="Duration" className="info-icon" />
                  <p className="info-text">{trip.infoText.duration}</p>
                </div>
              </div>

              <div className="info-item">
                <p className="info-title">Date Trip</p>
                <div className="info-content">
                  <img src="https://res.cloudinary.com/dwh00k4um/image/upload/v1741678039/sistem/haxi4qql7ldijy1eh0nn.png" alt="Date Trip" className="info-icon" />
                  <p className="info-text">{trip.infoText.dateTrip}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Deskripsi */}
          <div className="trip-description">
            <h5>Description</h5>
            <p>{trip.infoText.description}</p> {/* Menampilkan deskripsi dari Trips.js */}
          </div>

          {/* Harga */}
          <h3 className="trip-price">{trip.price} <span>/ Person</span></h3>

          {/* Tombol Delete */}
          <button className="btn-delete" onClick={() => navigate("/")}>Delete Trip</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailTrip;
