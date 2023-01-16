import sendMail from "../controllers/sendMail.js";
const web = (app)=>{
    app.post("/api/sendmail",sendMail().index)
}

export default web;