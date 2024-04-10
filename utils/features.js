import jwt from "jsonwebtoken";


export const sendCookie = (user , res)=>{ 
const token=jwt.sign({
    _id:user._id
  },process.env. SECRET)
  res.cookie("jwt",token).redirect("/")
}