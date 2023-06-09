import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db.js'
import authRoutes from './routes/Route.js'
import cors from 'cors'
import path from "path";
import {fileURLToPath} from 'url';
//config env
dotenv.config()

//database config
connectDB()

//rest objext
const app=express()

//path
const __filename= fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);

//middlewares
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname,'./client/build')))



//routes
app.use('/api/v1/auth',authRoutes)

//rest api
app.use('*',function(req,res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'))
  })

//PORT  
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT,()=>{
    console.log(`Server Running on ${PORT}`)
})