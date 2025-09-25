import express from "express";
import mongoose from "mongoose";

const router = express.Router();
//CRUD
//C = Create 
router.post("/cadastro", async (req, res) => {
    try {
        await mongoose.connect("mongodb+srv://isaquevieira2006_db_user:OT8pEoFH50DDMkrk@bdteste.3bwexqy.mongodb.net/ServidorAulaIII Writes=true&w=majority&appName=BDteste");
        console.log(req);
        const usuario = req.body;
        res.json(usuario);// gravar no MongoDB
    } catch (erro) {
        console.log("erro");
    }
})
//R = Retreave/Recuperar
//login
//U = Update
//D = Delete
export default router; 