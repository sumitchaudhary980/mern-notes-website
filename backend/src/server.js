import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

//middleware
if(process.env.NODE_ENV !== "production") {
  app.use(
  cors({
    origin: "http://localhost:5173",
  }),
); // Enable CORS for all routes
}

app.use(express.json()); //this middleware is used to parse incoming JSON requests and make the data available in req.body. It is essential for handling POST and PUT requests where the client sends data in JSON format.
app.use(rateLimiter); // Apply the rate limiter middleware to all routes


app.use("/api/notes", notesRoutes);

if (process.env.NODE_ENV === "production") {
app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});