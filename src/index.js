import dotenv from 'dotenv'
//Used to get env values ASAP
dotenv.config()//✅ ALWAYS first

import express from 'express';
import {handleDBConnection} from "./db/index.js"
import {app} from './app.js'

const PORT = process.env.PORT||4501

const startServer=async()=>{
    try {
        // 1. Connect DB
        const db=await handleDBConnection();
        console.log(`MongoDB Connected: ${db.connection.host}`)

        // 2. Start server
        const server=app.listen(PORT,()=>{
            console.log(`Server is running on ${PORT}`)
        })

        // 3. Handle server-level errors
        server.on('error',(err)=>{
            console.error(`Server Error: ${err}`)
            process.exit(1);//Shut down(Critical failure)
        })

    } catch (error) {
        // 4. Handle startup failure (DB or anything in try)
        console.error(`Startup Failed: ${error}`) 
        process.exit(1); //Shut down(Critical failure)
    }
}

startServer()
