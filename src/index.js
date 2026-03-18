import express from 'express';
import dotenv from 'dotenv'
import {handleDBConnection} from "./db/index.js"

//Used to get env values ASAP
dotenv.config()

//DB Connection
handleDBConnection()