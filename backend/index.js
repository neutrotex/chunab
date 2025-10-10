import connectDB from "./config/db.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import superAdminRoutes from "./routes/superAdminRoutes.js";
import partyRoutes from "./routes/partyRoutes.js";
import candidateRoutes from "./routes/candidateRoutes.js";
import constituencyRoutes from "./routes/constituencyRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

connectDB();

// Middleware
app.use(cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
    res.send("Chunab Backend Server Running");
});

app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/super-admin", superAdminRoutes);
app.use("/api/parties", partyRoutes);
app.use("/api/candidates", candidateRoutes);
app.use("/api/constituencies", constituencyRoutes);

app.listen(port, () => { 
    console.log(`Server Running on port ${port}`);
})