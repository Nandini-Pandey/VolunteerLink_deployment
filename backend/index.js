const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const cors = require("cors");

const { connectMongoDB } = require("./connection");
const { validateToken } = require("./services/authentication");
const { authenticateJWT } = require("./middlewares/auth");

const authRoute = require("./routes/auth");
const volunteerRoute = require("./routes/volunteer");
const taskRoute = require("./routes/task");

const app = express();
const PORT = process.env.PORT || 8000; // Use environment variable for flexibility

// ✅ Database Connection
connectMongoDB(process.env.DATABASE_URI);

// ✅ Templating Engine
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// ✅ Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.resolve("./public")));

// ✅ CORS Configuration (Only Set Once, Correctly)
app.use(
  cors({
    origin: "https://volunteer-link-deployment.vercel.app", 
    credentials: true, // Allow cookies & authentication headers
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  })
);

// ✅ Routes
app.use("/api/auth", authRoute);
app.use("/api/volunteer", volunteerRoute);
app.use("/api/tasks", taskRoute);

// ✅ Profile Route (Check Auth via Cookies)
app.get("/api/profile", (req, res) => {
  const token = req.cookies.token; // Get token from cookie

  if (!token) return res.status(401).json({ error: "Unauthorized" });

  try {
    const decoded = validateToken(token);
    res.json({ user: decoded });
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
});

// ✅ Start Server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

