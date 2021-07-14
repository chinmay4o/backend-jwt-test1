import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import {router} from "./routes/auth.js";

dotenv.config({path : "./config.env"})
const app = express();

app.listen(process.env.PORT , () => console.log("listening on port 5001"))

app.get("/" , (req , res) => {
    res.send("chinmay welcome to test1 folder")
})

app.use("/" , router);