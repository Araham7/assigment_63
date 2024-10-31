import mongoose from "mongoose";
import 'dotenv/config';

const DB_URL = process.env.DB_URL;

if (!DB_URL) {
    console.error("Database URL is not defined. Please set process.env.DB_URL .");
    process.exit(1);
}

const connectToDb = ()=>{
    mongoose.connect(DB_URL)
                            .then((conn)=>{
                                console.log(`Connected to DB > ${conn.connection.host}`);
                            })
                            .catch((err)=>{
                                console.log(`Error while connecting to DB > ${err.message}`);
                                process.exit(1);
                            })
}

export {
    connectToDb
}
