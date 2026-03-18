import mongoose from "mongoose"
import {DB_NAME} from "../constants.js"

export const handleDBConnection=async()=>{
    try{
        const dbInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("DB Connection Successful",dbInstance)
    }catch(err){
        console.error("DB Connection Failed",err)
        process.exit(1) //Shut down(Critical failure)
    }
}
//1) Always implement Try Catch
//2) Always use Async Await //DB is in another continent