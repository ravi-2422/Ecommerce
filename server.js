import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js'
import authRoutes from './routes/authRoute.js';

// configure env

dotenv.config({path:"config/config.env"})

// rest object
const app = express();

// database config
connectDB();

// middleware
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use('api/v1/auth',authRoutes);

// rest api
app.get("/", (req, res) => {
    res.send("<h1>Welcome to ecommerce app</h1>");
});

const PORT = process.env.PORT;

// run listen
app.listen(PORT,()=>{
    console.log(`Server is running on ${process.env.DEV_MODE} on port ${PORT}`.bgCyan.white);
});

