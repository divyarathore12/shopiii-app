import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import morgan from 'morgan';
import authRoutes from './routes/authRoute.js'
import cors from 'cors'
import CategoryRoute from './routes/CategoryRoute.js'
import productRoute from './routes/productRoute.js'


const app =express();
// configure env
// import bodyParser from 'body-parser'
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
app.use(express.json());

 dotenv.config();
 connectDB();
 app.use(cors({origin:true,credentials:true}));

 app.use(morgan('dev'))

app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/category',CategoryRoute);
app.use('/api/v1/prodyct',productRoute);


//rest api
app.get('/',(req,res)=>{
    res.send("<h1>WELCOME TO ECOMMERCE WEBSITE</h1>")
})
//server
const PORT= 8080
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`.bgCyan.white)
})