import {User} from "../models/user.js";
import bycrpt from "bcrypt";
import { sendCookie } from "../utils/features.js";
export const register = async (req, res) => {
    try {
        //body data
        const {name,email,password} = req.body;
        let user = await User.findOne({email});

        if(user) return res.redirect("/login");

        const hashedPassword = await bycrpt.hash(password, 10)

        user = await User.create({name,email,password:hashedPassword});

       return sendCookie(user, res);
    

    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).send("Error registering user");
    }
}

export const login =  async (req, res) => {
    try {
      const { email,password }= req.body
      let user = await User.findOne({email})

      if (!user) return res.redirect("/signup") 

      const isMatch=await bycrpt.compare(password,user.password)

      if (!isMatch) return res.json({
        message: "incorrect email or password",success:false
      })
      return sendCookie(user);

    } catch (error) { 
        console.error("Error logging in user:", error);
        res.status(500).send("Error logging in user");
    }
}