import express from "express";
import productRouter from "./routes/product.js";
import authRouter from "./routes/auth";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv"
dotenv.config();
const app = express();
//middleware
app.use(express.json());
app.use(cors())

//router
app.use("/api", productRouter);
app.use("/api", authRouter);

// server

mongoose.connect('mongodb://127.0.0.1:27017/ASM2');
//.then(() => console.log("db connected")).catch(error => console.log(error))


export const viteNodeApp = app;
// 'mongodb://127.0.0.1:27017/ASM2'