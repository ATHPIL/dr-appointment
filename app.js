import express from "express";
import path from "path";
import userRouter from "./routes/user.js";
import { config } from "dotenv";
export const app = express();


config({
    path:"./data/config.env"
})


app.use(express.urlencoded({extended:true}));

//middleware
app.use(userRouter);
// convert data into json format
app.use(express.json());
// Static file
app.use(express.static(path.join(path.resolve(),"public")));

//use EJS as the view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {

    res.render("home");
});
