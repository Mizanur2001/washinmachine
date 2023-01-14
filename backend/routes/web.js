import sendMail from "../controllers/sendMail.js";
const web = (app)=>{
    app.get("/",sendMail().index)
}

export default web;