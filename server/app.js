import express from  "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import mongoose from "mongoose"
dotenv.config()
import authRoute from "./routes/auth.js"
import studentsRoute from "./routes/students.js"
import cors from "cors"
import usersRoute from "./routes/users.js"
import emailsRoute from "./routes/email.js"
import verifyOtpPassword from "./routes/verify-otp-password.js"


const app = express()

// Middlewares  
app.use(express.json())
app.use(cookieParser())

// const allowedOrigins = [
//     "http://localhost:5173",
//     "https://kingtech-front.onrender.com"
// ];
  
// const corsOptions = {
//     origin: (origin, callback) => {
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, origin);
//       } else {
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//     credentials: true,
//     methods: ["GET","POST","PUT","PATCH","DELETE","OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization"],
// };
  
// app.use(cors(corsOptions));
// app.options("*", cors(corsOptions))


app.use(cors({
    origin: process.env.PUBLIC_URL?.trim(),
    methods:"GET, PUT, DELETE, POST, PATCH, HEAD",
    credentials: true,
    optionsSuccessStatus: 204,
    allowedHeaders: ["Content-Type", "Authorization"],
}))

app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api/students", studentsRoute)
app.use("/api/email", emailsRoute)
app.use("/api/verify-otp-password", verifyOtpPassword)

app.use(function (err, req, res, next){
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong"
    return res.status(errorStatus).json({
        success: false,
        message: errorMessage,
        status: errorStatus,
        stack: err.stack
    })
})


const connect = async function () {
    try {
       await mongoose.connect(process.env.MONGO_DB_URI)
       console.log("Mongo DB is already connected") 
    } catch (err) {
        throw err
    }
}

mongoose.connection.on("connected", function() {
    console.log("Mongo DB connected")
})

mongoose.connection.on("disconnected", function() {
    console.log("Mongo DB disconnected")
})

app.get("/", function(req, res, next){
    res.send("Bonjour les gens")
})

const PORT = process.env.PORT || 8800;


app.listen(PORT, function () {
    connect()
    console.log(`Serveur en écoute sur le port ${PORT}`)
})
