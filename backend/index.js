const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);

const router = require("./src/routes"); 

app.use(express.json());
app.use("/api/trip", router); 

const port = 3001;
server.listen(process.env.PORT || port, () =>
  console.log(`Server running at http://localhost:${port}`)
);

