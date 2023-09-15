import express, { Request, Response, json, query } from "express";
import dotenv from "dotenv"
import cors from "cors"
import index from "./routes";

const app = express()

dotenv.config()
app.use(json())
app.use(cors())
app.use(index)

const port: number | string = process.env.PORT || 5000
app.listen(port, () =>{
    console.log('Servidor rodando na porta:' + port)
})