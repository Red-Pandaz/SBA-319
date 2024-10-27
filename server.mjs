//imports
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectDB from './db/conn.mjs'

//setups
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3001;

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
//routes
connectDB()
//listener
app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`);
})