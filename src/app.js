import express from 'express'
import cors from "cors"
import cookieParser from "cookie-parser"
import {LIMIT} from "./constants.js"

export const app=express()
//Configurations
    //1) CORS 
    app.use(cors({ 
        origin : process.env.CORS_ORIGIN ,  //Allowed frontend URL
        credentials:true                    //Allows cookies / auth headers (JWT, sessions) to be sent
    }))

    //2) Parse cookies (read cookies from request)
    app.use(cookieParser())

    //3) Serve static files (images, CSS, JS) from "public" folder
    app.use(express.static("public"))

    //4) Parse incoming JSON (API requests)
    app.use(express.json({
        limit:LIMIT  // max request body size
    }))  

    //5) Parse URL-encoded data (form submissions)
    app.use(express.urlencoded({
        limit:LIMIT,   // max form size
        extended:true  // supports nested objects
    }))





