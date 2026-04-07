import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import "./config/cloudinaryConfig.js";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import paperRoutes from "./routes/paperRoutes.js";
import { globalErrorHandler } from "./exceptions/globalErrorHandler.js";
import { NotFoundError } from "./exceptions/apiError.js";


const app = express();

// Connect Database
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/paper", paperRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("ScholarFlow API running...");
});

// Handle unknown routes
app.use((req, res, next) => {
  next(new NotFoundError(`Route ${req.method} ${req.originalUrl} not found`));
});

// Global error handler
app.use(globalErrorHandler);

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
