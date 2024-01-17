const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// app.use(cors({
//     origin: "http://localhost:3000",
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Specify the allowed HTTP methods
//     credentials: true, // Allow credentials (cookies, headers)
//   }));

// Database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "quizUp",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL: " + err.stack);
    return;
  }
  console.log("Connected to MySQL as id " + db.threadId);
});

// Registration API
app.post("/register", (req, res) => {
  const { username, password, email, age, location, gender, currentStatus } =
    req.body;

  // Validate inputs as needed
  const sql =
    "INSERT INTO users (username, password, email, age, location, gender, currentStatus) VALUES (?, ?, ?, ?, ?, ?, ?)";
  const values = [
    username,
    password,
    email,
    age,
    location,
    gender,
    currentStatus,
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error registering user: " + err.message);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    res.status(201).json({ message: "User registered successfully" });
  });
});

// Login API
// Login API
app.post("/login", cors(), (req, res) => {
  const { email, password } = req.body;

  // Validate inputs as needed

  const sql =
    "SELECT id, username, email, userType FROM users WHERE email = ? AND password = ?";
  const values = [email, password];

  db.query(sql, values, (err, results) => {
    if (err) {
      console.error("Error authenticating user: " + err.message);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    if (results.length === 0) {
      res.status(401).json({ error: "Invalid credentials" });
    } else {
      // Extract the userType from the first result
      const { id, username, email, userType } = results[0];

      // Include userType in the response
      res
        .status(200)
        .json({ id, username, email, userType, message: "Login successful" });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
