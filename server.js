import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db.js'
import authRoutes from './routes/authRouth.js'
import cors from 'cors'
//config env
dotenv.config()

//database config
connectDB()

//rest objext
const app=express()

//middlewares
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/v1/auth',authRoutes)

//rest api
app.get('/',()=>{
    res.send({
        message:"Welcome to Food delivery app"
    })
})

//PORT  
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT,()=>{
    console.log(`Server Running on ${PORT}`)
})