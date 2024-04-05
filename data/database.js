import mongoose from "mongoose";

export const connectDB = ()=>{
    mongoose.connect(process.env.MONGO_URL,{
        dbName: "doctAppointment"
    }).then(()=> console.log("Database Connected Successfully")).catch((e)=> console.log(e));
}