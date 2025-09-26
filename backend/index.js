import connectDB from "./config/db";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Server Running");
});

app.listen(port, () => { 
    console.log(`Server Running on port ${port}`);
})