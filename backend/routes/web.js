import sendMail from "../controllers/sendMail.js";
const web = (app)=>{
    app.post("/sendmail",sendMail().index)
}

export default web;