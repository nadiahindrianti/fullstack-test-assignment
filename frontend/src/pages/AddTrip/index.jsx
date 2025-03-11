import React, { useState } from "react";
import Footer from "../../components/Footer";
import "./AddTrip.css";
import trips from "../../data/Trips";

const AddTrip = () => {
  const [tripData, setTripData] = useState({
    title: "",
    price: "",
    location: "",
    image: "",
    slot: "",
    accommodation: "",
    transportation: "",
    eat: "",
    day: "",
    night: "",
    dateTrip: "",
  });

  // Handle perubahan input form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTripData({ ...tripData, [name]: value });
  };

  // Handle submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Pastikan semua data terisi
    if (!tripData.title || !tripData.price || !tripData.location || !tripData.image) {
      alert("Harap isi semua bidang yang diperlukan!");
      return;
    }

    // Format data sesuai struktur Trips.js
    const newTrip = {
      id: Trips.length + 1, // ID otomatis bertambah
      title: tripData.title,
      price: tripData.price,
      location: tripData.location,
      image: tripData.image,
      slot: tripData.slot || "0/15", // Default slot jika kosong
      infoText: {
        accommodation: tripData.accommodation,
        transportation: tripData.transportation,
        eat: tripData.eat,
        duration: `${tripData.day} Day ${tripData.night} Night`, // Gabungkan Day & Night
        dateTrip: tripData.dateTrip,
      },
    };

    // Tambahkan trip baru ke daftar Trips
    Trips.push(newTrip);
    alert("Trip berhasil ditambahkan!");

    // Reset form setelah submit
    setTripData({
      title: "",
      price: "",
      location: "",
      image: "",
      slot: "",
      accommodation: "",
      transportation: "",
      eat: "",
      day: "",
      night: "",
      dateTrip: "",
    });
  };


  return (
    <div className="add-trip-wrapper min-vh-100 d-flex flex-column">
      {/* Container Utama */}
      <div className="container flex-grow-1 d-flex align-items-center justify-content-center py-4">
        <div className="add-trip-container w-100" style={{ maxWidth: "800px" }}>
          <h2 className="add-trip-title text-center">Add Trip</h2>
          <form onSubmit={handleSubmit} className="add-trip-form">

            {/* Title Trip */}
            <label htmlFor="title" className="form-label">Title Trip</label>
            <input type="text" id="title" name="title" placeholder="Trip Title" value={tripData.title} onChange={handleChange} required />

            {/* Country Selection */}
            <label htmlFor="country" className="form-label">Country</label>
            <select id="country" name="location" placeholder="Location" value={tripData.location} onChange={handleChange} required >
              <option value="">Select Country</option>
              <option value="Australia">Australia</option>
              <option value="South Korea">South Korea</option>
              <option value="Japan">Japan</option>
              <option value="Indonesia">Indonesia</option>
            </select>

            {/* Accommodation */}
            <label htmlFor="accommodation" className="form-label">Accommodation</label>
            <input type="text" id="accommodation" name="accommodation" placeholder="Accommodation" value={tripData.accommodation} onChange={handleChange} required />

            {/* Transportation */}
            <label htmlFor="transportation" className="form-label">Transportation</label>
            <input type="text" id="transportation" name="transportation" placeholder="Transportation" value={tripData.transportation} onChange={handleChange} required />

            {/* Eat */}
            <label htmlFor="eat" className="form-label">Eat</label>
            <input type="text" id="eat" name="eat" placeholder="Meal type" value={tripData.eat} onChange={handleChange} required />

            {/* Duration */}
            <div className="duration-group">
              <div className="duration-item">
                <label htmlFor="durationDay" className="form-label">Days</label>
                <input type="number" id="durationDay" name="durationDay" placeholder="0" onChange={handleChange} required />
              </div>
              <div className="duration-item">
                <label htmlFor="durationNight" className="form-label">Nights</label>
                <input type="number" id="durationNight" name="durationNight" placeholder="0" onChange={handleChange} required />
              </div>
            </div>

            {/* Date of Trip */}
            <label htmlFor="dateTrip" className="form-label">Date of Trip</label>
            <input type="date" id="dateTrip" name="dateTrip" onChange={handleChange} required />

            {/* Price */}
            <label htmlFor="price" className="form-label">Price</label>
            <input type="text" id="price" name="price" placeholder="Enter price" onChange={handleChange} required />

            {/* Quota */}
            <label htmlFor="quota" className="form-label">Quota</label>
            <input type="number" id="quota" name="quota" placeholder="Enter trip quota" onChange={handleChange} required />

            {/* Description */}
            <label htmlFor="description" className="form-label">Description</label>
            <textarea id="description" name="description" placeholder="Enter trip description" onChange={handleChange} required></textarea>

            {/* Image URL */}
            <label htmlFor="imageUrl" className="form-label">Image URL</label>
            <input type="text" id="imageUrl" name="imageUrl" placeholder="Enter image URL" onChange={handleChange} required />

            {/* Submit Button */}
            <button type="submit" className="btn-add-trip">Add Trip</button>
          </form>
        </div>
      </div>
      
      {/* Footer Tetap di Bawah */}
      <Footer />
    </div>
  );
};

export default AddTrip;
