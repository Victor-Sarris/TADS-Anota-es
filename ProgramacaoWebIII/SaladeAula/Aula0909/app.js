const { render } = require('ejs');
const express = require('express');
const app = express();
const PORT = 3000
app.set("view engine", "ejs") // configura o motor de render
app.use(express.urlencoded({extended: true})) // decodificador POST

app.get("/task", (req, res)=>{
    res.render("index");
})

app.listen(PORT, (err)=>{
    console.log("Servidor online na porta: http://localhost:3000/.");
})