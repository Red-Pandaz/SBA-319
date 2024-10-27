import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const connectionString = process.env.MONGO_URI;
const dbName = process.env.DB_NAME; 
console.log(connectionString)
console.log(dbName)

let db = null;

const connectDB = async () => {
    if (db) {
        return db;
    }

    try {
        const client = new MongoClient(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        await client.connect();
        db = client.db(dbName); // Specify the database name here
        console.log('MongoDB Connected...');
        return db;
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};
connectDB()
export default connectDB;