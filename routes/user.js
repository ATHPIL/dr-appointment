import express from "express";
import { login , register } from "../controller/user.js";

const router = express.Router();

router.get("/signup", (req, res) => {
    res.render("signup");
});

// Register User
router.post("/signup", register);


//  User
router.get("/login", (req , res)=>{
    res.render("login")
})
router.post("/login",login);

export default router;
