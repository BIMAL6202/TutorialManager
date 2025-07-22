import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import tutorialRoutes from "./app/routes/tutorial.routes.js";

dotenv.config();

const app = express();

const corsOptions = {
    origin: ["http://localhost:5173","https://tutorial-manager-eta.vercel.app/"]// for local React
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Default route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the Tutorial Application." });
});

// Use tutorial routes
tutorialRoutes(app);
const uri = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));
// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
