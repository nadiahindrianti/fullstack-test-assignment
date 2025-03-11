const express = require("express");
const { getTrips, getTripDetail, addTrip, updateTrip, deleteTrip } = require("./controller/trip");

const router = express.Router();

router.get("/", getTrips);
router.get("/:id", getTripDetail);
router.post("/add", addTrip);
router.put("/edit/:id", updateTrip);
router.delete("/delete/:id", deleteTrip);

module.exports = router;


