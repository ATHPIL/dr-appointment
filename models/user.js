import mongoose, { Schema } from "mongoose";
// Create Schema
const schema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    email: {
        type:String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    }
});

// collection part
export const User = new mongoose.model("User",schema);

