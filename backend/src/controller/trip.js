const db = require("../config/db");

// GET all trips (hanya title, price, location, image, slot)
const getTrips = (req, res) => {
  const query = "SELECT id, title, price, location, image, slot FROM trips";
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ status: "failed", message: err.message });

    res.status(200).json({ status: "success", data: results });
  });
};

// GET trip detail by ID
const getTripDetail = (req, res) => {
  const { id } = req.params;
  const query = "SELECT title, location, image, accommodation, transportation, eat, duration, dateTrip, description, price FROM trips WHERE id = ?";
  
  db.query(query, [id], (err, results) => {
    if (err) return res.status(500).json({ status: "failed", message: err.message });

    if (results.length === 0) {
      return res.status(404).json({ status: "failed", message: "Trip not found" });
    }

    res.status(200).json({ status: "success", data: results[0] });
  });
};

// POST add new trip
const addTrip = (req, res) => {
  const { title, price, location, image, slot, accommodation, transportation, eat, duration, dateTrip, description } = req.body;

  const query = "INSERT INTO trips (title, price, location, image, slot, accommodation, transportation, eat, duration, dateTrip, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

  db.query(query, [title, price, location, image, slot, accommodation, transportation, eat, duration, dateTrip, description], (err, result) => {
    if (err) return res.status(500).json({ status: "failed", message: err.message });

    res.status(201).json({
      status: "success",
      message: "Trip added successfully",
      data: { id: result.insertId, title, price, location, image, slot, accommodation, transportation, eat, duration, dateTrip, description },
    });
  });
};

// PUT update trip by ID
const updateTrip = (req, res) => {
  const { id } = req.params;
  const { title, price, location, image, slot, accommodation, transportation, eat, duration, dateTrip, description } = req.body;

  const query = "UPDATE trips SET title=?, price=?, location=?, image=?, slot=?, accommodation=?, transportation=?, eat=?, duration=?, dateTrip=?, description=? WHERE id=?";

  db.query(query, [title, price, location, image, slot, accommodation, transportation, eat, duration, dateTrip, description, id], (err, result) => {
    if (err) return res.status(500).json({ status: "failed", message: err.message });

    if (result.affectedRows === 0) {
      return res.status(404).json({ status: "failed", message: "Trip not found" });
    }

    res.status(200).json({
      status: "success",
      message: "Trip updated successfully",
    });
  });
};

// DELETE trip by ID
const deleteTrip = (req, res) => {
  const { id } = req.params;

  const query = "DELETE FROM trips WHERE id = ?";
  
  db.query(query, [id], (err, result) => {
    if (err) return res.status(500).json({ status: "failed", message: err.message });

    if (result.affectedRows === 0) {
      return res.status(404).json({ status: "failed", message: "Trip not found" });
    }

    res.status(200).json({
      status: "success",
      message: `Trip with id ${id} deleted successfully`,
    });
  });
};

module.exports = {
  getTrips,
  getTripDetail,
  addTrip,
  updateTrip,
  deleteTrip,
};
