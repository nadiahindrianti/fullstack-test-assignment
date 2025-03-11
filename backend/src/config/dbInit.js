const db = require("./db");

const createTripsTable = `
CREATE TABLE IF NOT EXISTS trips (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    price VARCHAR(50) NOT NULL,
    location VARCHAR(100) NOT NULL,
    image TEXT NOT NULL,
    slot VARCHAR(10) NOT NULL,
    accommodation VARCHAR(255) NOT NULL,
    transportation VARCHAR(255) NOT NULL,
    eat VARCHAR(255) NOT NULL,
    duration VARCHAR(50) NOT NULL,
    dateTrip DATE NOT NULL,
    description TEXT NOT NULL
);
`;

db.query(createTripsTable)
  .then(() => {
    console.log("✅ Table 'trips' checked/created successfully!");
  })
  .catch((err) => {
    console.error("Error creating trips table: ", err.message);
  });
