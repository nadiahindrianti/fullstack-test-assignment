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
    slot: "0/15", 
    accommodation: "",
    transportation: "",
    eat: "",
    durationDay: "",
    durationNight: "",
    dateTrip: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTripData({ ...tripData, [name]: value });
  };

  // Handle submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!tripData.title || !tripData.price || !tripData.location || !tripData.image || !tripData.description) {
      alert("Harap isi semua bidang yang diperlukan!");
      return;
    }


    const newTrip = {
      id: trips.length + 1, // ID otomatis bertambah
      title: tripData.title,
      price: tripData.price,
      location: tripData.location,
      image: tripData.image,
      slot: tripData.slot, 
      infoText: {
        accommodation: tripData.accommodation,
        transportation: tripData.transportation,
        eat: tripData.eat,
        duration: `${tripData.durationDay} Day ${tripData.durationNight} Night`, 
        dateTrip: tripData.dateTrip,
        description: tripData.description,
      },
    };

    trips.push(newTrip);
    alert("Trip berhasil ditambahkan!");

    setTripData({
      title: "",
      price: "",
      location: "",
      image: "",
      slot: "0/15",
      accommodation: "",
      transportation: "",
      eat: "",
      durationDay: "",
      durationNight: "",
      dateTrip: "",
      description: "",
    });
  };

  return (
    <div className="add-trip-wrapper min-vh-100 d-flex flex-column">
      <div className="container flex-grow-1 d-flex align-items-center justify-content-center py-4">
        <div className="add-trip-container w-100" style={{ maxWidth: "800px" }}>
          <h2 className="add-trip-title text-center">Add Trip</h2>
          <form onSubmit={handleSubmit} className="add-trip-form">
            <label htmlFor="title" className="form-label">Title Trip</label>
            <input type="text" id="title" name="title" placeholder="Trip Title" value={tripData.title} onChange={handleChange} required />

            <label htmlFor="country" className="form-label">Country</label>
            <select id="country" name="location" value={tripData.location} onChange={handleChange} required>
              <option value="">Select Country</option>
              <option value="Australia">Australia</option>
              <option value="South Korea">South Korea</option>
              <option value="Japan">Japan</option>
              <option value="Indonesia">Indonesia</option>
            </select>

            <label htmlFor="accommodation" className="form-label">Accommodation</label>
            <input type="text" id="accommodation" name="accommodation" placeholder="Accommodation" value={tripData.accommodation} onChange={handleChange} required />

            <label htmlFor="transportation" className="form-label">Transportation</label>
            <input type="text" id="transportation" name="transportation" placeholder="Transportation" value={tripData.transportation} onChange={handleChange} required />

            <label htmlFor="eat" className="form-label">Eat</label>
            <input type="text" id="eat" name="eat" placeholder="Meal type" value={tripData.eat} onChange={handleChange} required />

            <div className="duration-group">
              <div className="duration-item">
                <label htmlFor="durationDay" className="form-label">Days</label>
                <input type="number" id="durationDay" name="durationDay" placeholder="0" value={tripData.durationDay} onChange={handleChange} required />
              </div>
              <div className="duration-item">
                <label htmlFor="durationNight" className="form-label">Nights</label>
                <input type="number" id="durationNight" name="durationNight" placeholder="0" value={tripData.durationNight} onChange={handleChange} required />
              </div>
            </div>

            <label htmlFor="dateTrip" className="form-label">Date of Trip</label>
            <input type="date" id="dateTrip" name="dateTrip" value={tripData.dateTrip} onChange={handleChange} required />

            <label htmlFor="price" className="form-label">Price</label>
            <input type="text" id="price" name="price" placeholder="Price" value={tripData.price} onChange={handleChange} required />

            <label htmlFor="slot" className="form-label">Quota</label>
            <input type="text" id="slot" name="slot" placeholder="e.g. 5/15" value={tripData.slot} onChange={handleChange} required />

            <label htmlFor="description" className="form-label">Description</label>
            <textarea id="description" name="description" value={tripData.description} onChange={handleChange} required></textarea>

            <label htmlFor="image" className="form-label">Image URL</label>
            <input type="text" id="image" name="image" placeholder="Image URL" value={tripData.image} onChange={handleChange} required />

            <button type="submit" className="btn-add-trip">Add Trip</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddTrip;
