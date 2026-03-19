import mongoose from "mongoose"
import {DB_NAME} from "../constants.js"

export const handleDBConnection=async()=>{
    const dbInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    return dbInstance;     
}
//Main Control is Provided in index.js
//1) Always implement Try Catch
//2) Always use Async Await //DB is in another continent