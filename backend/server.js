/** Node Modules */
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

/** Local Modules */
// DB Connection
const connectDB = require("./config/db");

// User Routes
const userRoutes = require("./routes/userRoutes");

// Error Handling Files
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

/** Load Environment Variables */
dotenv.config();

/** Create Node Server */
const app = express();

/**  Initiate DB */
connectDB();

let whitelist = [
  "http://localhost:5000",
  "http://localhost:3000",
  "https://testo-bank.herokuapp.com",
];

let corsOptions = {
  credentials: true,
  origin: function (origin, callback) {
    callback(null, true);

    /*  if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    } */
  },
};
//app.use(cors(corsOptions));

/**  Parse Incoming Requests with JSON payloads */
app.use(express.json());

// Users endpoint for posting users data
app.use("/api/users", cors(corsOptions), userRoutes);

// Deployment
if (process.env.NODE_ENV === "production") {
  app.use(
    express.static(path.join(__dirname, "../frontend/build/")),
    cors(corsOptions)
  );

  app.get("*", cors(corsOptions), (req, res) =>
    res.sendFile(path.resolve(__dirname, "../frontend", "build", "index.html"))
  );
} else {
  app.get("/", cors(corsOptions), (req, res) => {
    res.send("API is running..");
  });
}

// Make errors easily readable from db etc in a structured format
app.use(notFound);
app.use(errorHandler);

// Port Configuration
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
