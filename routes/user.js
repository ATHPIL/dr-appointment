import express from "express";
import { login, register } from "../controller/user.js";

const router = express.Router();

// Signup page route
router.get("/signup", (req, res) => {
    // Render the signup page template
    res.render("signup");
});

// Register User route
router.post("/signup", register);

// Login page route
router.get("/login", (req, res) => {
    // Render the login page template
    res.render("login");
});

// Login User route
router.post("/login", login);

export default router;