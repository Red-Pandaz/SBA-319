//imports
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectDB from './db/conn.mjs'
import userRoutes from './routes/userRoutes.mjs'
import postRoutes from './routes/postRoutes.mjs'
import commentRoutes from './routes/commentRoutes.mjs'

//setups
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3001;
//DB Conenction
connectDB()
//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
//routes
app.use('/users', userRoutes)
app.use('/posts',postRoutes)
app.use('/comments', commentRoutes)

//listener
app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`);
})