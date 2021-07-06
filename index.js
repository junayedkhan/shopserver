import express from "express"
import mongoDB_connection from "./config/mongoDB.js"
import cors from "cors"
import Router from "./route/route.js"
const app = express()
const PORT = process.env.PORT || 2000

mongoDB_connection()

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,           
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(express.json())
app.use("/", Router)

app.listen(PORT, console.log(`server start on: ${PORT}`))
