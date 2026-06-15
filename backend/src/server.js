import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import {connectDB} from './config/db.js';
import dotenv from 'dotenv';
import rateLimiter from './middleware/rateLimiter.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;




//middleware
app.use(express.json()); //this middleware is used to parse incoming JSON requests and make the data available in req.body. It is essential for handling POST and PUT requests where the client sends data in JSON format.
app.use(rateLimiter); // Apply the rate limiter middleware to all routes

app.use("/api/notes", notesRoutes);
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});