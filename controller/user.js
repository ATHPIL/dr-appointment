import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/features.js";

// Register user controller function
export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user with the given email already exists
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ success: false, message: "User already exists. Please log in." });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        user = await User.create({ name, email, password: hashedPassword });

        // Send cookie and redirect to login page
        return res.redirect("/login");
    } catch (error) {
        console.error("Error registering user:", error);
        return res.status(500).json({ success: false, message: "Error registering user" });
    }
};

// Login user controller function
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        let user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ success: false, message: "User not found. Please sign up." });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ success: false, message: "Incorrect email or password" });
        }

        // If passwords match, send cookie and redirect to homepage
        return sendCookie(user, res);
    } catch (error) {
        console.error("Error logging in user:", error);
        return res.status(500).json({ success: false, message: "Error logging in user" });
    }
};