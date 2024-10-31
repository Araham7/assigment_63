import express, { json, urlencoded } from "express";
import { connectToDb } from './config/Db_connection.js'
import { router as userRoute } from "./routes/userRoute.js";
import morgan from "morgan";
import cors from 'cors'


const app = express();

app.use(morgan('dev')); // using 'morgan' middleware.

connectToDb(); // cnnection to DB.

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS) to allow requests from different origins, enhancing API accessibility for clients.


app.get("/" , (req , res)=>{
    res.status(200).json({
        success: true,
        message: "You are on the home page!"
    });
})

app.use("/api/auth" , userRoute);

app.use("*" , (req , res)=>{
    res.status(404).json({
        success: false,
        message: "404 , Page not Found!"
    })
})

export {
    app
}